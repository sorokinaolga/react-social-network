import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeThunkCreator } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-content'>
            <Route path='/login' render={() => <Login />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />}/>
          </div>
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeThunkCreator})
  )(App);
