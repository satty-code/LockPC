import axios from 'axios';
import React from 'react';
import logo from "../../assets/Images/logo.jpg";


export default function Dashboard() {

  const lockPc =
    () => async () => {
      return axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/poc/lock/',
        data: {
          lock: 'lock'
        }
      }).then((response) => {
        alert("Locked", response?.data);
      });
    }

  const checkStatus =
    () => async () => {
      return axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/poc/status/',
        data: {
          status: 'status'
        }
      }).then((response) => {
        alert(response);
      });
    }

  const usename = localStorage.getItem("userName")
  return (
    <div className='container '>
      <div className="container text-center text-uppercase text-danger h3">
        Welcome {usename}!<span role="img" title='Namaste' aria-label="namaste">🙏</span>
      </div>
      <div className="d-inline-flex p-2">
        <div className='container row' style={{ marginTop: "50px" }}>
          <div className='col-sm-6 text-center' >
            <div style={{ marginTop: "80px" }}>
              <h1>Lock your PC</h1>
              <button className='btn bg-primary text-white' title='Lock laptop' type='button' onClick={lockPc()} >Lock </button>
            </div>
            <div>
              <h1>Check PC Status</h1>
              <button className='btn bg-primary text-white' title='Check laptop status' type='button' onClick={checkStatus()} >Check </button>
            </div>
          </div>
          <div className='col-sm-6'>
            <img src={logo} alt="computer/laptop" title='laptop' width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  )
}
