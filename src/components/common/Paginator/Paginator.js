
import React from 'react';
import style from './Paginator.module.css';


const Paginator = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i=1; i<=pageCount; i++) {
    pages.push(i);
  }

  return <div>
      {pages.map(p => {
        if (p < 40) {return <span className={p === props.currentPage && style.selected_page} 
        onClick={() => {props.onPageChanged(p)}}>{p} </span>}
      })}
    </div>
}

export default Paginator;
