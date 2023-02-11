import React from 'react';
import logo from "../../assets/Images/logo.jpg";

export default function Home() {

    return (
        <div className='container'>
            <div className="container text-center text-uppercase h3">Welcome</div>
            <div className='container text-center '>
                <h5>Have you forgot to lock your system/PC? <br />Don't worry, We are here to solve this!</h5>
            </div>
            <div className='container text-center' style={{ marginTop: "10px" }}>
                <img src={logo} alt='photoeffr' width="60%" height="60%" />
            </div>
        </div>
    );
}
