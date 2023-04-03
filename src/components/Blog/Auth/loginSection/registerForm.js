import React, {useState} from 'react';
import axios from 'axios'

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const [register, setRegister] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()

        console.log(name + " " + email + " " + password)

        const configuration = {
            method: 'post',
            url: "http://localhost:8080/blog/auth/register",
            // headers: {
            //     'Content-Type': 'application/json',
            // },
            data: {
                name: name,
                email: email,
                password: password,
            },
        }
        // make the API call
        axios(configuration)
            .then((result) => {
                setRegister(true);
            })
            .catch((error) => {
                error = new Error();
            });
    }

    return (
            <form className='p-lg-5' onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputUserName">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputUserName"
                        placeholder="Enter username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter email"
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
                <div className="form-group">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword2"
                        placeholder="Confirm Password"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
        );
}

export default RegisterForm;