import React, { Component } from 'react'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import Navbar from './components/Navbar/Navbar'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import { Routes, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import Login from './components/Login/Login'
import { connect } from 'react-redux'
import { initilizeApp } from './Redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'

class App extends Component {
  componentDidMount() {
    this.props.initilizeApp()
}

render () {
  if (!this.props.initialized) {
    return <Preloader />
  }
  
  return (
    <div>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='wrapper'>
          <Routes>
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/profile/:userId/" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default connect(mapStateToProps, {initilizeApp}) (App)
