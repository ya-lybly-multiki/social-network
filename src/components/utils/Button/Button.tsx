import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import styles from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>


type ButtonPropsType = DefaultButtonPropsType & {
    callBack: () => void
    disabled?:boolean
}

export function Button ({callBack, className, children,disabled}:ButtonPropsType) {


    const finalClassName = `${styles.button} ${className}`

    return (
        <button disabled={disabled} className={finalClassName} onClick={callBack}>{children}</button>
    )
}