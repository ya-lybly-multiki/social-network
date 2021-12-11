import React, {ChangeEvent, useState} from 'react';
import {Button} from "../Button/Button";
import {useForm} from "react-hook-form";


type FormData = {
    firstName: string;
    lastName: string;
}

type PropsType = {
    addText: (newMessage:string) => void
    Text: string
    nameBtn:string
    setTitle:(title:string)=> void
}

const TextAreaForm = ({nameBtn,
                          Text,
                          addText,
                        ...props
                          }:PropsType) => {
    const { register, setValue, handleSubmit,reset, formState: { errors } } = useForm<FormData>();
    const onSubmit = handleSubmit(data => console.log(data));



    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let current = e.currentTarget.value
        props.setTitle(current)

    }


    const handlerReset = () => {
        addText(Text)
    }

    register('firstName', { required: true, maxLength: 10 });

    const { onChange } = register('firstName');

    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea value={Text}   {...register("firstName",{
                    onChange: (e) => {changeHandler(e)},
                })}>

                </textarea>
                <div>
                    <Button  callBack={handlerReset} >{nameBtn}</Button>
                </div>
            </form>
        </div>
    );
};

export default TextAreaForm;