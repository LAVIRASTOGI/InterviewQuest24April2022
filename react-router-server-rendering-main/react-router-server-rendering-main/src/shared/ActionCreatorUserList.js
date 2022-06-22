import { getUserList } from "../inputService"

export const USER_DATA_LIST='USER_DATA_LIST'
export function userList(){
    return async(dispatch,getState)=>{
         let dataUser =await getUserList();
         dispatch({type:USER_DATA_LIST,payload:dataUser})
    }
}