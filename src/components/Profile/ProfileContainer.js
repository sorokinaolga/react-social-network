
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfileThunkCreator, getUserStatus, updateStatus, saveAvatar, saveProfile } from '../../redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = this.props.authUserId;
      if(!userId) {
        this.props.history.push('/login');
      }
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
        <Profile {...this.props} 
                  isOwner={!this.props.match.params.userId}
                  profile={this.props.profile} 
                  status={this.props.status} 
                  updateStatus={this.props.updateStatus}
                  saveAvatar={this.props.saveAvatar} />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatus, updateStatus, saveAvatar, saveProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

