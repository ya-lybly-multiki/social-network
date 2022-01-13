import React, {ChangeEvent} from 'react';
import styles from './textAreaForm.module.scss'
import {useForm} from "react-hook-form";
import {Button} from "@mui/material";


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
    const { register, setValue, handleSubmit,reset, formState: { errors,isValid } } = useForm<FormData>({
        mode:"all"
    });
    const onSubmit = handleSubmit(data => console.log(data));

    const onKey = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            addText(Text)
        }
    }

    const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let current = e.currentTarget.value
        props.setTitle(current)

    }

    const handlerReset = () => {
       return  Text ? addText(Text) : errors.firstName?.message
    }



    return (
        <div>
            <form className={styles.formWrapper} onSubmit={onSubmit}>
                <textarea onKeyPress={onKey}  value={Text}   {...register("firstName",{
                    onChange: (e) => {changeHandler(e)},
                    required:"Поле обязательно к заполнению",
                    minLength:{
                            value:1,
                            message:"Минимум 1 символ"
                    },
                    maxLength:{
                        value:40,
                        message:"максимум 20 символов"
                    }
                    ,
                })}>
                </textarea>

                    {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}

                <div>
                    <Button variant="contained"
                            color={"success"}
                            type={"submit"}
                            disabled={!isValid}
                            onClick={handlerReset}>add Post</Button>
                </div>
            </form>
        </div>
    );
};

export default TextAreaForm;