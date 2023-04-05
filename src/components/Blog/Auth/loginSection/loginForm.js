import React, {Component, useState} from 'react';
import axios from 'axios'
import Cookies from "universal-cookie";
const cookies = new Cookies();

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login(event) {
        event.preventDefault()

        const configuration = {
            method: 'post',
            url: 'http://localhost:8080/blog/auth/login',
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            data: {
                email: email,
                password: password,
            },
        }

        // make the API call
        axios(configuration)
            .then((result) => {
                // set the cookie
                cookies.set("TOKEN", result.data.token, {
                    path: "/blog",
                });
                // redirect user to the auth page
                window.location.href = "/blog";
            })
            .catch((error) => {
                error = new Error();
            });
    }

    return (
        <form className='p-lg-5' onSubmit={login}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email
                    with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            {login ? (
                <p className="text-success">You Are Logged in Successfully</p>
            ) : (
                <p className="text-danger">You Are Not Logged in</p>
            )}
        </form>
    );
}

export default LoginForm;