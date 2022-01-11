import styles from './Paginator.module.css'
import React, {useState} from 'react'


export const Paginator = ({currentPage, pageSize, totalUserCount, setCurrentPage, portionSize = 10}: PropsType) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    console.log(leftPortionPageNumber)
    console.log(rightPortionPageNumber)

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button
                className={styles.arrowButton}
                onClick={() => {setPortionNumber(portionNumber - 1)}}>&lt;&lt;&lt;</button>}

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return (
                        <span
                            // className={currentPage === p ? styles.selectedPage : styles.pageNumber}
                            className={currentPage === p ? `${styles.numberPage} ${styles.selected}` : styles.numberPage}
                            key={p}
                            onClick={(e ) => {
                                setCurrentPage(p)
                            }}
                        >{p}</span>
                    )
                })}

            {portionCount > portionNumber &&
            <button
                className={styles.arrowButton}
                onClick={() => {setPortionNumber(portionNumber + 1)}}>&gt;&gt;&gt;</button>}
        </div>
    )
}

type PropsType = {
    currentPage: number
    pageSize: number
    totalUserCount: number
    setCurrentPage: (numberCurrentPage: number) => void
    portionSize?: number
}
