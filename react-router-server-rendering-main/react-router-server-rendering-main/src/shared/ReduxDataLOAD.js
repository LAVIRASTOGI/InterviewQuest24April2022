import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userList } from './ActionCreatorUserList';

function ReduxDataLOAD(props) {
    let userdataLoad = useSelector(state => state.UserData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userList())
    }, [])
    return (
        <>
        <div>ReduxDataLOAD</div>
        <table>
        <tr>
          <th>USERID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
        {userdataLoad.userList && userdataLoad.userList.map(ele => {
          return (<tr key={ele.id} >
            <td>{ele.userId}</td>
            <td>{ele.title}</td>
            <td>{ele.body}</td>
          </tr>
          )
        })}
      </table>
      </>
    )
}

export default ReduxDataLOAD