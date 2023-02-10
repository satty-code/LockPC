import React, { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function Protected(props) {
  const { Cmp } = props;
  const Navigate = useNavigate();

  useEffect(() => {
    let logedinUser = localStorage.getItem("userToken");
    if (!logedinUser) {
      Navigate("/login");
    }
  });

  return (
    <div>
      <Cmp />
    </div>

  )
}
