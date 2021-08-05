import React, {useState} from "react";
import s from "./Paginator.module.css"


type PaginatorPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    onPageNumber: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator = ({totalItemsCount, pageSize, currentPage, onPageNumber, portionSize = 10}: PaginatorPropsType) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;




    return (
        <div className={s.container}>
            {portionNumber > 1 &&
            <button className={s.but} onClick={() => setPortionNumber(portionNumber - 1)}>Previous</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(el => {

                    const stylePaginator = `${currentPage === el ? s.activeCurrentPage : ''} ${s.block}`

                    return (
                        <span key={el}
                              onClick={() => onPageNumber(el)}
                              className={stylePaginator}>
                            {el}
                        </span>
                    )
                })
            }
            {portionCount > portionNumber &&
            <button className={s.but} onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
        </div>
    )
}