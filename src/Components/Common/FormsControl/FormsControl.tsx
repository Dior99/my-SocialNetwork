import {WrappedFieldProps} from "redux-form";
import s from "./FormsControl.module.css";
import React from "react";

export const FormsControl: React.FC<WrappedFieldProps> = (props) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={hasError ? s.formControl : ''}>
            <div>
                {props.children}
            </div>
            <div>
                {hasError &&
                <span className={s.error}>{props.meta.error}</span>
                }
            </div>
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props
   return <FormsControl {...props}><textarea {...input} {...restProps}/></FormsControl>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, ...restProps} = props
   return <FormsControl {...props}><input {...input} {...restProps}/></FormsControl>
}