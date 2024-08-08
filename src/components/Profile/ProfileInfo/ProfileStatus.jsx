import React, { Component } from "react";
import styles from './../Profile.module.css'
import Edit from '../../../img/edit.svg?react'
import Okay from '../../../img/ok.svg?react'

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        // debugger
        // if (prevProps.status !== this.props.status) {
        //     this.setState({
        //         status: this.props.status
        //     })
        // }
    }

    render() { 
        return ( 
            <div className={styles.profileStatus}>
                { !this.state.editMode &&
                    <div className={styles.profileStatus}>
                        <button onClick={this.activateEditMode}>
                            <Edit />
                        </button>  
                        <div>
                            <span>
                                {this.props.status}
                            </span>
                        </div>
                    </div>
                }
                { this.state.editMode && 
                    <div className={styles.profileStatus}>
                        <button onClick={this.deactivateEditMode}>
                            <Okay />
                        </button>
                        <span>
                            <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} />
                        </span>
                    </div>
                }
            </div>
         );
    }
}
 
export default ProfileStatus