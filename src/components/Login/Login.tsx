import React from 'react';

import {Field, InjectedFormProps, reduxForm} from "redux-form";

const Login = () => {

    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
           <LoginReduxForm  onSubmit={onSubmit}/>
        </div>
    );
};



 type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    placeholder={"Login"}
                    name={"Login"}
                    component={"input"}/>
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={"Password"}
                    component={"input"}
                    type={"password"}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={"rememberMe"}
                    component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};




 const LoginReduxForm = reduxForm<FormDataType>({form:"login"})(LoginForm)

export default Login;