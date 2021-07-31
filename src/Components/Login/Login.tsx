import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLengthSymbols = maxLength(10)

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} component={Input} validate={[requiredField, maxLengthSymbols]}/>
            </div>
            <div>
                <Field name={"password"} component={Input} validate={[requiredField, maxLengthSymbols]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/>
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