import React from 'react';
import {useForm} from "react-hook-form";

type FormInputs = {
    firstName: string
    Password: string
}



const LoginForm = () => {

    const { register, setValue, handleSubmit,reset, formState: { errors,isValid } } = useForm<FormInputs>({
        mode:"all"
    });

    const onSubmit = () => {
        handleSubmit(data => console.log(data) );
    }


    return (
        <form onSubmit={onSubmit}>
            <label>
                <h3>Login</h3>
                <div>
                    <input {...register("firstName", { required: true
                    ,minLength:{
                            value:5,
                            message:"Минимум 5 символов"
                        }
                    })} />
                        {errors?.firstName && <p>{errors?.firstName?.message || "Error!"}</p>}
                </div>
            </label>
                <div>
                    <input type={"password"} {...register("Password",
                        { required: "Поле обязательно к заполнению" ,
                            minLength:{
                                value:5,
                                message:"Минимум 5 символов"
                            }})} />
                        {errors?.Password && <p>{errors?.Password?.message || "Error!"}</p>}
                </div>
                <div>
                    <input type={"checkbox"}/>
                </div>
                <button disabled={!isValid} type={"submit"}>Login</button>
        </form>


    );
};

export default LoginForm;