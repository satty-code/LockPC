import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const nav = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    let data = { username, password }

    const login = () => {
        fetch('http://127.0.0.1:8000/poc/login', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            res.json().then((result) => {
                if (result.token) {
                    localStorage.setItem('userToken', result.token);
                    localStorage.setItem('userName', result.user.username);
                    nav("/dashboard");
                }
                else { alert("Invalid Credentials!"); }
            })
        })
    }
    useEffect(() => {
        let logedinUser = localStorage.getItem("userToken");
        if (logedinUser) { nav("/dashboard"); }
    }, [nav]);

    return (
        <section>
            <div className="container py-2">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card  text-dark" style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-3 text-center">
                                <div className="mb-md-1 mt-md-2 pb-1">
                                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                    <p className="fw-bold text-dark">Please enter your username and password!</p>

                                    <div className="form-outline form-white">
                                        <label className="form-label fw-bold" >Email</label>
                                        <input type="text" id="typeEmailX" placeholder='Enter Username' className="form-control form-control-lg"
                                            onChange={e => setUsername(e.target.value)} required />
                                    </div>
                                    <div className="form-outline form-white mb-5">
                                        <label className="form-label fw-bold">Password</label>
                                        <input type="password" id="typePasswordX" placeholder='Enter Password' className="form-control form-control-lg"
                                            onChange={e => setPassword(e.target.value)} required />
                                     </div>
                                    <button className="btn btn-outline-light btn-lg px-5 bg-success" title='Login Button' type="button" onClick={login}>Login</button>

                                    <div className='pt-4'>Don't have an account? Please contact to administration!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}