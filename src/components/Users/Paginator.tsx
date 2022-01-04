import s from "./Users.module.css";
import React from "react";

type PropsType = {
    pageSize: number
    totalUserCount: number
    currentPage: number
    setCurrentPage:(num: number)=>void
}

export function Paginator(props: PropsType) {

    let pagesCount = (props.totalUserCount / props.pageSize)
    <= 20 ? Math.ceil(props.totalUserCount / props.pageSize) : 21

    let pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div className={s.usersPage}>
            <div className={s.numberPages}>
                {pages.map((page,index) => <div
                    key={index}
                    className={props.currentPage === page ? `${s.numbersPage} ${s.selected}` : s.numbersPage}
                    onClick={()=>{props.setCurrentPage(page)}}>{page}</div>)}
            </div>
        </div>
    )
}
