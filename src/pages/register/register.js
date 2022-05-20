import React, {useEffect, useRef, useState} from "react";
import {useHistory} from "react-router-dom"
import {qPost} from "../../utils/HTTPHelpers";
import './register.css';

document.title = 'Register';

function RegisterForm(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();



    // useEffect(() => {
    //     checkAllInputs();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [phoneNumber, firstName, lastName, agreeToTerms]);

    const history = useHistory();
    const routeChange = (e) =>{
        e.preventDefault();
        let path = `/register`;
        history.push(path);;
    }


    function validateUsername(e) {
        e.preventDefault();
        setUsername(e.target.value);
        console.log(e.target.value);
    }
    function validatePassword(e) {
        e.preventDefault();
        setPassword(e.target.value);
        console.log(e.target.value);
    }


    function signup(e) {
        e.preventDefault();
        let data = {
            "username": username,
            "password": password,
        }
        qPost( "/users/signup", data).then((res) => {
            if (res.statusCode === 200) {
               alert('success');
            } else {
                alert('NOTT success');
            }
        }).catch(() => {
        })
    }

    return (
        <div>
            <div className='container loginPage'>
                <div className='loginHeader'>
                    <h2>
                        Welcome to BookMania
                    </h2>
                    <h5>
                        Enter your details to register
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
                            <input type="text" id="password" autoComplete="off"
                                   onBlur={validatePassword}
                            />
                        </div>
                        <input type="submit" value="Sign In"
                               onClick={signup}
                        />

                    </form>
                </div>
            </div>

        </div>
    );
}

export default RegisterForm
