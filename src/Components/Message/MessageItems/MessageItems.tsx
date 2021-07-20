import React from 'react';
import s from './MessageItems.module.css';
import {MessagePropsType} from "./MessageItemsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export function MessageItems(props: MessagePropsType) {

    const messageItems = props.messages.map(m => {
        return (
            <div key={m.id} className={s.messageItems}>
                <img className={s.messageAvatar} src={m.avatar}/>
                <div className={s.messageText}>
                    <div><h4 className={s.messageName}>{m.name}</h4></div>
                    <div>{m.title}</div>
                </div>
            </div>
        )
    })

    const addMessage = (values: AddMessageFormDataType) => {
        props.addMessage(values.message)
    }

    return (
        <div className={s.messageHeader}>
            {messageItems}
            <div>
                <AddMessageFormContainer onSubmit={addMessage}/>
            </div>
        </div>
    )
}

type AddMessageFormDataType = {
    message: string
}

function AddMessageForm (props: InjectedFormProps<AddMessageFormDataType>) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" name="message" plaseholder="New Message"/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

const AddMessageFormContainer = reduxForm<AddMessageFormDataType>({form: "addMessage"})(AddMessageForm)

