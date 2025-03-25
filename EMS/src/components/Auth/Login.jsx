import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Helloooooo", e)

        setEmail("");
        setPassword("");
    }

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="login-form w-50">
                <form onSubmit={submitHandler} className="p-5 d-flex flex-column gap-3 shadow rounded bg-light">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" name="email" id="email" placeholder="Enter your email" required />
                    <input value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" type="password" name="password" id="password" placeholder="Enter your password" required />
                    <button className="btn btn-secondary">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
