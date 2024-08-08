import styles from './../Profile.module.css'
import Edit from '../../../img/edit.svg?react'
import Okay from '../../../img/ok.svg?react'
import { useEffect, useState } from 'react';

function ProfileStatusWithHooks(props) {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
  return (
    <div className={styles.profileStatus}>
      {!editMode && (
        <div className={styles.profileStatus}>
          <button onClick={activateMode}>
            <Edit />
          </button>
          <div>
            <span>{props.status}</span>
          </div>
        </div>
      )}
      {editMode && (
        <div className={styles.profileStatus}>
          <button onClick={deactivateMode}>
            <Okay />
          </button>
          <span>
            <input
              onChange={onStatusChange}
              autoFocus={true}
              value={status}
            />
          </span>
        </div>
      )}
    </div>
  );
}

 
export default ProfileStatusWithHooks