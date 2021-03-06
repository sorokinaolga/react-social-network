
import React from 'react';
import { connect } from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleFetching, setFollowingInProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { getUsers, getFollowFriend, getUnfollowFriend } from '../../api/api';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
      this.props.toggleFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }
  
  onPageChanged = (p) => {
    this.props.setCurrentPage(p);
    this.props.toggleFetching(true);
    getUsers(p, this.props.pageSize).then(data => {
        this.props.toggleFetching(false);
        this.props.setUsers(data.items);
    });
  }

  onUnfollowClick = (id) => {
    this.props.setFollowingInProgress(true, id);
    getUnfollowFriend(id).then(code => {
      if (code === 0) {
        this.props.unfollow(id);
      }
      this.props.setFollowingInProgress(false, id);
    });
  }

  onFollowClick = (id) => {
    this.props.setFollowingInProgress(true, id);
    getFollowFriend(id).then(code => {
      if (code === 0) {
        this.props.follow(id);
      }
      this.props.setFollowingInProgress(false, id);
    });
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : 
      <Users totalUsersCount={this.props.totalUsersCount} 
      pageSize={this.props.pageSize} 
      currentPage={this.props.currentPage} 
      onPageChanged={this.onPageChanged} 
      users={this.props.users} 
      unfollow={this.props.unfollow} 
      follow={this.props.follow} 
      onUnfollowClick={this.onUnfollowClick}
      onFollowClick={this.onFollowClick}
      followingInProgress={this.props.followingInProgress}/>}
    </>
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}

export default connect (mapStateToProps, { 
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleFetching,
  setFollowingInProgress,
  }) (UsersContainer);

