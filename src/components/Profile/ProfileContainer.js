

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUserProfileThunkCreator } from '../../redux/profile-reducer';
import Profile from './Profile';


class ProfileContainer extends React.Component {
  
  componentDidMount() {
    let userId = this.props.match.params.userId;
    this.props.getUserProfileThunkCreator(userId);
  }

  render() {
    return (
        <Profile {...this.props} profile={this.props.profile}/>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(mapStateToProps, {getUserProfileThunkCreator}),
  withRouter,
  withAuthRedirect
)(ProfileContainer);