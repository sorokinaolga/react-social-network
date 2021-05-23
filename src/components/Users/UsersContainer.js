
import React from 'react';
import { connect } from 'react-redux';
import { getUsersThunkCreator, followThunkCreator, unfollowThunkCreator, getNewUsersThunkCreator } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSelector } from '../../redux/users-selectors';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
  }
  
  onPageChanged = (p) => {
    this.props.getNewUsersThunkCreator(p, this.props.pageSize);
  }

  onUnfollowClick = (id) => {
    this.props.unfollowThunkCreator(id);
  }

  onFollowClick = (id) => {
    this.props.followThunkCreator(id);
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : 
      <Users totalUsersCount={this.props.totalUsersCount} 
      pageSize={this.props.pageSize} 
      currentPage={this.props.currentPage} 
      onPageChanged={this.onPageChanged} 
      users={this.props.users} 
      onUnfollowClick={this.onUnfollowClick}
      onFollowClick={this.onFollowClick}
      followingInProgress={this.props.followingInProgress}/>}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default connect (mapStateToProps, { 
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
  getNewUsersThunkCreator
})(UsersContainer);

