import React, {useEffect} from 'react';
import logo from "../../assets/Images/logo.jpg";
import { useNavigate } from 'react-router-dom';

export default function Home() {  
  const nav = useNavigate();

 useEffect(() => {
        let logedinUser = localStorage.getItem("userToken");
        if (logedinUser) {
            nav("/dashboard");
        }
    });
  return (
    <>
      <div className='container'>
      <div className="container text-center text-uppercase h3">Welcome</div>
        <div className='container text-center '>
          <h5>Have you forgot to lock your system/PC? <br />Don't worry, We are here to solve this!</h5>
        </div>
        <div className='container row' style={{ marginTop: "50px" }}>
          <div className='col-sm-6 text-center' >
            <div style={{ marginTop: "100px" }}>
              <h1 >To lock your Laptop/PC Please login.</h1>
            </div>
          </div>
          <div className='col-sm-6'>
            <img src={logo} alt='photoeffr' width="100%" height="100%" /></div>
        </div>
      </div>

    </>
  )
}
