
import React, { useState } from 'react';
import style from './Paginator.module.css';


const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 20}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i=1; i<=pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage/portionSize));
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return <div className={style['paginator']}>
      { portionNumber > 1 && 
      <button className={style['page-button']} onClick={() => {setPortionNumber(portionNumber - 1)}}>Назад</button> }

      {pages
        .filter(p => p>=leftPortionPageNumber && p<=rightPortionPageNumber)
        .map((p) => {
        return <span className={`${style['page-number']} ${currentPage === p ? style['page-number-active'] : ''}`}
        key={p} 
        onClick={(e) => {onPageChanged(p);}}>{p}</span>
      })}

      { portionCount > portionNumber &&
      <button className={style['page-button']} onClick={() => {setPortionNumber(portionNumber + 1)}}>Вперед</button> }
    </div>
}

export default Paginator;
