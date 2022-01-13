import React from 'react';
import {useForm} from "react-hook-form";
import {connect, useDispatch} from "react-redux";
import {login} from "../../Redux/Auth-reducer";
import {AppStateType} from "../../Redux/Redux-store";
import {Redirect} from "react-router-dom";


type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginPropsType = MapStateToPropsType & MapDispatchToPropsType

function LoginForm (props:LoginPropsType)  {

   const dispatch = useDispatch()

    const { register,  handleSubmit, formState: { errors,isValid } } = useForm<FormDataType>({
        mode:"all"
    });

    function onSubmit(data:FormDataType) {
        dispatch(login(data.email,data.password,data.rememberMe))
    }


    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <form style={{padding: "15px"}} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <h3>Login</h3>
                <div>
                    <input type={"email"} {...register("email", { required: true
                    ,minLength:{
                            value:5,
                            message:"Минимум 5 символов"
                        }
                    })} />
                        {errors?.email && <p>{errors?.email?.message || "Error!"}</p>}
                </div>
            </label>
                <div>
                    <label>
                    <h3>Password</h3>
                    <input type={"password"} {...register("password",
                        { required: "Поле обязательно к заполнению" ,
                            minLength:{
                                value:5,
                                message:"Минимум 5 символов"
                            }})} />
                        {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
                    </label>
                </div>
                <div>
                    <input type={"checkbox"} {...register("rememberMe")}/> Remember me
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

const LoginContainer = connect(MapStateToProps,{login})(LoginForm)

export default LoginContainer