import { USER_DATA_LIST } from "./ActionCreatorUserList";

const initialState={
    userList:[]
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_DATA_LIST:
            return {
                ...state,
                userList:action.payload.data
            }
            break;
        default:
            return state
    }
}

export default UserReducer