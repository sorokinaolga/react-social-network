
import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


const Users = (props) => {

   return <div>
    <Paginator currentPage={props.currentPage} 
              onPageChanged={props.onPageChanged} 
              totalUsersCount={props.totalUsersCount} 
              pageSize={props.pageSize} />
    {
      props.users.map(element => <User user={element}
                                      followingInProgress={props.followingInProgress}
                                      onUnfollowClick={props.onUnfollowClick}
                                      onFollowClick={props.onFollowClick}
                                      key={element.id}
                                  />)
    }
  </div>

}

export default Users;
