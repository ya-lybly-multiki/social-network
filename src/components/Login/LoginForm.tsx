import React from 'react';
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import {Redirect} from "react-router-dom";

type FormInputs = {
    login: string
    Password: string
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

const LoginForm = (props:LoginPropsType) => {

    const { register, setValue, handleSubmit,reset, formState: { errors,isValid } } = useForm<FormInputs>({
        mode:"all"
    });

    const loginValue = (value:FormDataType) => {
        props.login(value.email,value.password,value.rememberMe)
    }

    const onSubmit = () => {
        handleSubmit(loginValue)
    }


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                <h3>Login</h3>
                <div>
                    <input type={"email"} {...register("login", { required: true
                    ,minLength:{
                            value:5,
                            message:"Минимум 5 символов"
                        }
                    })} />
                        {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
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
                    <input type={"checkbox"}/> Remember me
                </div>
                <button disabled={!isValid} type={"submit"}>Login</button>
        </form>


    );
};

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

const MapStateToProps = (state:AppStateType) => {
    return {
        isAuth:state.auth.isAuth
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(
    MapStateToProps, {login})(LoginForm)