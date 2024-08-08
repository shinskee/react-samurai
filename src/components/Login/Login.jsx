import { connect } from "react-redux";
import { login, logout } from "../../Redux/auth-reducer";
import LoginForm from "./LoginForm";
import { Navigate } from "react-router-dom";

function Login(props) {
    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    
    return ( 

            <LoginForm login={props.login} logout={props.logout} />
     );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login, logout}) (Login)