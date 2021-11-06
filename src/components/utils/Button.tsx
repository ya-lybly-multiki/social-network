import React from "react";

type PropsType = {
    name:string
    callBack:()=> void
}

export function Button ({name,callBack}:PropsType) {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}>{name}</button>
    )
}