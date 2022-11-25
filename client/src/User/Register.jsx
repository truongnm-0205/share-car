import React, {useState} from 'react';
import ButtonComponent from '../component/ButtonComponent';

export default function Register(props){
  return <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"100%",backgroundImage:`url("/assets/images/login_background.jpg")`,backgroundSize:'100% 100%'}}>
    <div className='d-flex flex-column align-items-center justify-content-center flex-grow-1' style={{width:"360px"}}>
      <h1 className='my-4 text-center viceph-color text-capitalize sc-color' style={{fontWeight:"bold"}}>Sign up</h1>
      <div className={`mb-3 d-flex align-items-center justify-content-between input-group form-control border`} >
        <input type="email" className="border-0 flex-grow-1" placeholder="Email" style={{height:"45px",outline:"none"}}/>
        <span className="material-symbols-outlined">mail</span>
      </div>
      <div className={`mb-3 d-flex align-items-center justify-content-between input-group border form-control border`}>
        <input type="password" className="border-0 flex-grow-1" placeholder="Password" style={{height:"45px",outline:"none"}}/>
        <span className="material-symbols-outlined">password</span>
      </div>
      <div className={`mb-3 d-flex align-items-center justify-content-between input-group border form-control border`}>
        <input type="password" className="border-0 flex-grow-1" placeholder="Re-enter Password" style={{height:"45px",outline:"none"}}/>
        <span className="material-symbols-outlined">password</span>
      </div>
      <ButtonComponent label="sign up" />
      <div className='mt-3 d-flex align-items-center justify-content-center'>
          <hr style={{width:"140px"}}/>
          <span className='mx-3 text-uppercase'>or</span>
          <hr style={{width:"140px"}}/>
      </div>
      <div className='mt-3 d-flex flex-row justify-content-end w-100'>
        <span className='me-1'>Already have an account?</span>
        <a href='/login' className="text-capitalize">login</a>
      </div>
    </div>
  </div>
}