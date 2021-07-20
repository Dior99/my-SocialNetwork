import React, {ChangeEvent} from 'react';
import s from './ProfileStatus.module.css';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        userStatus: this.props.status
    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    inactiveEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.userStatus)
    }

    changeValueStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            userStatus: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                userStatus: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.editMode
                        ? <input onBlur={this.inactiveEditMode}
                                 onChange={this.changeValueStatus}
                                 value={this.state.userStatus}
                                 autoFocus/>
                        : <span onDoubleClick={this.activeEditMode}>{this.state.userStatus}</span>
                }

            </div>
        )
    }
}


