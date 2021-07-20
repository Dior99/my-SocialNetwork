import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} component={"input"}/>
            </div>
            <div>
                <Field name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export function Login () {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={onSubmit}/>
        </div>
    )
}

const LoginFormContainer = reduxForm<FormDataType>({form: "login"})(LoginForm)