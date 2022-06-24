import React, { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listUser, UserRequestData } from '../Redux/Login/LoginActionCreator';
import { inputService } from '../Service/inputSevice';

function UserDetails() {
    let userdata = useSelector(state => state.LoginData);
    const dispatch = useDispatch();
    useEffect(() => {
        if((userdata?.UsersList.length==0)){
            dispatch(UserRequestData())
        }
    }, [])
    let header = ['Name', 'Pantone Value', 'Year','Color']
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
                            <td>{ele.pantone_value}</td>
                            <td>{ele.year}</td>
                            <td>{ele.color}</td>
                        </tr>

                    ))}
                </tbody>
            </Table>
        </Container>
    )
}

export default UserDetails