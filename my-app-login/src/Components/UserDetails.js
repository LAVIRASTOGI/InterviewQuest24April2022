import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listUser } from '../Redux/Login/LoginActionCreator';

function UserDetails() {

    let userdata = useSelector(state => state.LoginData);
    const dispatch = useDispatch();
    useEffect(() => {
        //get List of users
     dispatch(listUser())
    }, [])
    let header = ['FirstName', 'LastName', 'Username']
    return (
        <Container>
            <h1>USERS</h1>
            <Table responsive>
                <thead>
                    <tr>
                        {header.map((ele, index) => (
                            <th key={index}>{ele}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {userdata?.UsersList?.map((ele) => (
                        <tr key={ele.id}>
                            <td>{ele.name}</td>
                            <td>{ele.lastName}</td>
                            <td>{ele.username}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default UserDetails