import { setStatus } from '../../Redux/profileReducer';
import styles from '../Login/Login.module.css'
import { Formik, FormikContext } from "formik";

function LoginForm(props) {
    return ( 
        <div>
            <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
        onSubmit={(values, submitProps) => {
            props.login(values.email, values.password, submitProps.setStatus)
            submitProps.resetForm()
        }}
        >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            /> {FormikContext.Provider.status}
            {errors.email && touched.email && errors.email}
            <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
            </form>
        )}
        </Formik>
   </div>
 );

}


export default LoginForm;