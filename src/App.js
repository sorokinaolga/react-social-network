import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-content'>
          <Route path='/login' render={() => <Login />} />
          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          <Route path='/dialogs' render={() => <DialogsContainer />}/>
          <Route path='/news' render={() => <News />}/>
          <Route path='/music' render={() => <Music />}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/settings' render={() => <Settings />}/>
        </div>
      </div>
  );
}

export default App;
