

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
  profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfileThunkCreator}) (WithUrlDataContainerComponent);