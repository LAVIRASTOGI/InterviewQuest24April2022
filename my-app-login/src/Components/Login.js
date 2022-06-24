import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Toast, ToastContainer } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSentRequest } from '../Redux/Login/LoginActionCreator';
import { useNavigate } from 'react-router-dom'
import SpinnerApp from './Spinner';
import ToastApp from './ToastApp';
function Login() {
    const dispatch = useDispatch();
    const loginValue = useSelector(state => state.LoginData);
    const navigate = useNavigate()
    const [email, setEmail] = useState('eve.holt@reqres.in');
    const [password, setPassword] = useState('cityslicka');
    const [btnEnable, setBtnEnable] = useState(false);
    const [checkBox, setCheckBox] = useState(false);
    const [show, setShow] = useState(false);

    const changeHandler = (e) => {
        let { value, name } = e.target;
        if (name === 'emailId') {
            setEmail(value)
        } else if (name == 'PasswordID') {
            setPassword(value)
        }
    }
    const checkboxHandler = (e) => {
        setCheckBox(e.target.checked);
        checkBox ? setBtnEnable('true') : setBtnEnable('false')
    }
    const loginHandler = () => {
        dispatch(loginSentRequest({ "email": email , password: password }))
            .then(res => {
                setShow(true);

                if (res.status === 'success') {
                    let authUser = {
                        authToken: res.token,
                        sessionTime: new Date()
                    }
                    localStorage.setItem('authToken', JSON.stringify(authUser));
                    setTimeout(() => navigate('/'), 2000)

                } else {
                    setTimeout(() => navigate('/login'), 2000)

                }
            });
        resetHandler();

    }
    const resetHandler = () => {
        setEmail('')
        setPassword('')
        setBtnEnable(false)
        setCheckBox(false)
    }
    const ToastHandler = () => {
        setShow(false)
    }
    return (
        <>

            {loginValue.loading == 'false' ?
                <SpinnerApp />
                : <div className='LoginContainer mx-auto'>
                    <div>
                        <img src='https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH' alt='img' />
                    </div>
                    <div className='mb-3'>
                        <h5>Hello there Sign In to continue</h5>
                    </div>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} name='emailId' onChange={changeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} name='PasswordID' onChange={changeHandler} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" value={checkBox} label="By creating or logging into an account,you are agreeing with our Terms&Conditions and Privacy Policys." onChange={checkboxHandler} />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg" disabled={!btnEnable} onClick={loginHandler}>
                                NEXT
                            </Button>
                        </div>
                    </Form>
                </div>}
            <ToastApp show={show} ToastHandler={ToastHandler} msg={!loginValue.error ? 'success' : 'danger'}></ToastApp>
        </>
    )
}

export default Login