

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfileThunkCreator, getUserStatus, updateStatus } from '../../redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 2;
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
});

export default compose(
  connect(mapStateToProps, {getUserProfileThunkCreator, getUserStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);

