import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {MyDialogs} from "./MyDialogs";
import {InitialStateType} from "../../../Redux/message-reducer";

type MapStateToPropsType = {
    messagePage: InitialStateType
}

export type DialogsPropsType = MapStateToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        messagePage: state.messagePage
    }
}

export const MyDialogContainer = connect (mapStateToProps) (MyDialogs)


