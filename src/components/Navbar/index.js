import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userName");
    nav("/login");
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light" >
      <div className="container-fluid">
        <h4 className="navbar-brand" title='Lock PC'>Lock Your Pc</h4>
        <button className="navbar-toggler bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon " />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav h4 mb-2 mb-lg-0">

            {
              localStorage.getItem("userToken") ?
                <>
                  <li className="nav-item ">
                    <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link active" type="submit" onClick={logout}>Logout</a>
                  </li>
                </>
                :
                <>
                  <li className="nav-item ">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                  </li>
                </>
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}
