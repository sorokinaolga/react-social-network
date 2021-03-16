import React, { Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeThunkCreator } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunkCreator();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    } else {
      return (
          <div className='app-wrapper'>
            <HeaderContainer />
            <Navbar />
            <div className='app-content'>
              <Route path='/login' render={() => <Login />} />
              <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
              <Route path='/dialogs' render={() => {
                                              return <Suspense fallback={<div>Loading</div>}>
                                                <DialogsContainer/>
                                              </Suspense>
                                            }}/>
              <Route path='/news' render={() => <News />}/>
              <Route path='/music' render={() => <Music />}/>
              <Route path='/users' render={() => <UsersContainer />}/>
              <Route path='/settings' render={() => <Settings />}/>
            </div>
          </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
});

export default compose (
  withRouter,
  connect(mapStateToProps, {initializeThunkCreator})
  )(App);
