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
function loginError(error) {
    return {
        type: LOGIN_ERROR,
        payload: { loading: false, error: error, successMsg: "", userDetails: '', AuthToken: '' }
    }
}

export function listUser() {
    return {
        type: USER_LIST_SUCCESS,
        payload: {
            loading: false,
            usersList: [{ name: 'user1', lastName:'rastogi1', username:'rastogiuser1',id: 12 }, { name: 'user2', lastName:'rastogi2', username:'rastogiuser2', id: 13 }, { name: 'user3', lastName:'rastogi3', username:'rastogiuser3', id: 14 }, { name: 'user5', lastName:'rastogi5', username:'rastogiuser5',id: 15 }]
        }
    }
}
export const loginSentRequest = (userData) => {
    return async (dispatch) => {
        let loginUser = '';
        dispatch(loginRequest())
        try {
            loginUser = await inputService.userLogin(userData);
            dispatch(loginSuccess(loginUser.data, userData));
            //get userlist
           // dispatch(listUser())
        }
        catch (error) {
            if (error.response.data.error === 'user not found') {
                let token=Math.random() ;
                dispatch(loginSuccess({ token }, userData));
                //get userlist
                //dispatch(listUser())
                return {status:'error',token}
            } else {
                dispatch(loginError(error.response.data.error))
                return {status:'error'}
            }

        }
    }
}

