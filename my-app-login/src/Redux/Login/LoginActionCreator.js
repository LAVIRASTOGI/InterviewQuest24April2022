import { inputService } from "../../Service/inputSevice";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS, USER_LIST_SUCCESS } from "./LoginActionType";

export function loginRequest() {
    return {
        type: LOGIN_REQUEST,
        loading: true
    }
}
function loginSuccess(data, user) {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            loading: false,
            error: '',
            successMsg: 'Logged in successfully',
            userDetails: { ...user },
            AuthToken: data.token
        }
    }
}
function loginError(errorMsg) {
     let erorMessage=errorMsg||'Something went wrong'
    return {
        type: LOGIN_ERROR,
        payload: { loading: false, error: erorMessage, successMsg: "", userDetails: '', AuthToken: '' }
    }
}

export function listUser(Users) {
    return {
        type: USER_LIST_SUCCESS,
        payload: {
            loading: false,
            usersList: Users
        }
    }
}
export const loginSentRequest = (userData) => {
    return async (dispatch) => {
        let loginUser = '';
        let UsersData='';
        dispatch(loginRequest())
        try {
            loginUser = await inputService.userLogin(userData);
            dispatch(loginSuccess(loginUser.data, userData));
           

            //get userlist
            UsersData = await inputService.userData(loginUser.data.token);
            dispatch(listUser(UsersData.data.data))
            return {status:'success',token:loginUser.data.token}
        }
        catch (error) {
           
                dispatch(loginError(error.response.data.error))
                return {status:'error'}


        }
    }
}

export const UserRequestData = (userData) => {
    return async (dispatch) => {
        let UsersData='';
        dispatch(loginRequest())
        try {
            let userToken = JSON.parse(localStorage.getItem('authToken') || {})
            //get userlist
            UsersData = await inputService.userData(userToken);
            dispatch(listUser(UsersData.data.data))
            return {status:'success'}
        }
        catch (error) {
                dispatch(loginError(error?.response?.data?.error))
                return {status:'error'}
        }
    }
}
