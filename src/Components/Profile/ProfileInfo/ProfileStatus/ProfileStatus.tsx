import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatus = (props: ProfileStatusPropsType) => {

    const [active, setActive] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activeEditMode = () => {
        setActive(true)
    }

    const inactiveEditMode = () => {
        setActive(false)
        props.updateStatus(status)
    }

    const changeValueStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {active && <input onBlur={inactiveEditMode}
                              onChange={changeValueStatus}
                              value={status}
                              autoFocus/>}
            {!active && <span onDoubleClick={activeEditMode}>{props.status || "-----"}</span>}

        </div>
    )
}


