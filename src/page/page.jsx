import React from 'react'
import  "./page.css";

const page = () => {
  return (
    <div className="page">
  <div className="d-flex align-items-center vh-100 text-white">
    <div className="row">
      <div className=" info col m-5">
        <h1 className=" name " style={{fontSize:'50px'}}>Simon Noshy</h1>
        <p className=" p1 mb-3 fs-5 ">FrontEnd devolper</p>
        <div className="d-flex justify-content-center">
          <button type='button' className="b1 btn btn-dark ">About me </button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default page;