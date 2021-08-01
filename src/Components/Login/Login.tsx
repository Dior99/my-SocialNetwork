import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControl";
import {maxLength, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const maxLengthSymbols = maxLength(20)

export const LoginForm = (props: InjectedFormProps<FormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"email"} component={Input} validate={[requiredField, maxLengthSymbols]}/>
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

type mapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}

type LoginPropsType = MapStatePropsType & mapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

function Login (props: LoginPropsType) {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginFormContainer onSubmit={onSubmit}/>
        </div>
    )
}

const LoginFormContainer = reduxForm<FormDataType>({form: "login"})(LoginForm)



export default connect(mapStateToProps, {login}) (Login)