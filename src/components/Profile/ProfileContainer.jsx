import React, { PureComponent } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../Redux/profileReducer';
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { compose } from '@reduxjs/toolkit';
import { getAuthUserData } from '../../Redux/auth-reducer';
import Preloader from '../common/Preloader/Preloader';

class ProfileContainer extends PureComponent {
    componentDidMount() {
            // let userId = this.props.router.params.userId
            // if (!userId) {
            //     userId = this.props.myId
            // }
            //   this.props.getUserStatus(userId)
            //   this.props.getUserProfile(userId) 
            let userId = this.props.router.params.userId   
            if (!userId) {
              // setTimeout(() => {
                userId = this.props.myId
                if (!userId) {
                  setTimeout(() => {
                    this.props.router.navigate('/login')
                  }, 1);
                }
              // }, 1000);
            } 
              this.props.getUserStatus(userId)
              this.props.getUserProfile(userId)
             
    }

    render() {
        
        if (!this.props.isAuth) {
          return <Navigate to={'/login'} />
        }
        
        return ( 
            <Profile {...this.props} profile={this.props.profile} 
              status={this.props.status} updateStatus={this.props.updateUserStatus}
              isAuth={this.props.isAuth} />
         );
    }
}


let mapStateToProps = (state) => {
  return {
      profile: state.profilePage.profile,
      status: state.profilePage.status,
      myId: state.auth.userId,
      isAuth: state.auth.isAuth
  }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, getAuthUserData}),
    withRouter,
    // withAuthRedirect1
)(ProfileContainer);
// export default connect(mapStateToProps, {getUserProfile}) (withRouter(AuthRedirectComponent));