import React, {useEffect, useRef, useState} from "react";
import {useHistory} from "react-router-dom"
import {qPost} from "../../utils/HTTPHelpers";
import './login.css';

document.title = 'Login';

function LoginForm(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();



    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const history = useHistory();
    const routeChange = () =>{
        let path = `/register`;
        history.push(path);;
    }


    function validateUsername(e) {
        e.preventDefault();
        setUsername(e.target.value);
    }
    function validatePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);

    }


    function login(e) {
        e.preventDefault();
        let data = {
            "username": username,
            "password": password,
        }
        qPost( "/users/login", data).then((res) => {
            if (res.success) {
                localStorage.setItem("username",username);
                history.push('/homepage')
            } else {
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className={"loginCompletePage"}>
            <div className='container loginPage'>
                <div className={'loginForm'}>
                <div className='loginHeader'>
                        <h2 style={{'color':'#C02D1A'}}>
                            Welcome to BookMania
                        </h2>
                        <h5>
                            Enter your details to sign in
                        </h5>
                        <h5>
                            Don't have an account?<button onClick={routeChange} class={"registerButton"}>Register</button>
                        </h5>
                </div>
                <div className={'row'} >
                            <form className=' form '>
                                <div className={'form-group '}>
                                    <label className={'d-block text-left'}>
                                       Username
                                    </label>
                                    <input type="text" id="username"  autoComplete="off"
                                           onBlur={validateUsername}
                                    />
                                </div>
                                <div className={'form-group'}>
                                    <label className={'d-block text-left'}>
                                        Password
                                    </label>
                                    <input type="password" id="password"  autoComplete="off"
                                           onBlur={validatePassword}
                                    />
                                </div>
                                <input type="submit" value="Sign In"
                                       onClick={login}
                                />

                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default LoginForm
