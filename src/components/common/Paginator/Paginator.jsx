import React, { useState } from "react";
import styles from "./Paginator.module.css";
import Left from '../../../img/left.svg?react'
import Right from '../../../img/right.svg?react'

function Paginator({totalUsersCount: totalItemsCount, pageSize, currentPage, onPageChanged, portionSize=20}) {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return (
    <div className={styles.paginator}>
      {portionNumber > 1 ?
      <Left onClick={() => {setPortionNumber(portionNumber - 1)}} className={styles.arrow} />
        : <Left className={styles.arrowDisabled} />
      }
      {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
      .map((page) => {
        return (
          <span
            key={page}
            className={
              currentPage === page
                ? styles.currentPageCount
                : styles.PageCount
            }
            onClick={(e) => onPageChanged(page)}
          >
            {page}
          </span>
        );
      })}
      {portionCount > portionNumber &&
      <Right onClick={() => {setPortionNumber(portionNumber + 1)}} className={styles.arrow} />}
    </div>
  );
}

export default Paginator;
