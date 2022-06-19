import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, USER_LIST_SUCCESS } from "./LoginActionType";

const initialState = {
    loading: false,
    error: '',
    successMsg: '',
    userDetails: '',
    AuthToken: '',
    UsersList: []
}
const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
            break;
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                successMsg: action.payload.successMsg,
                userDetails: action.payload.userDetails,
                AuthToken: action.payload.AuthToken
            }
            break;
        case LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case USER_LIST_SUCCESS:
            return {
                ...state,
                UsersList: action.payload.usersList
            }
            break;
        default:
            return state
    }
}

export default LoginReducer