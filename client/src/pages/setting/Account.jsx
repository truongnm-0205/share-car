import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TextFieldEditable } from '../../common/FieldInput';
import ButtonComponent from '../../component/ButtonComponent';
import { setData } from '../../redux/UserSlice';
import { callToServerWithTokenAndUserObject } from '../../services/getAPI';

export default function Account(props){
  const user = useSelector(state=>state.user.data);
  const [fullName,setFullName] = useState(user.username);
  const [address,setAddress] = useState(user.address);
  const [age,setAge] = useState(user.age);
  const [phoneNumber,setPhoneNumber]= useState(user.phoneNumber);
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();

  const updateProfile = (e) =>{
    setLoading(true);
    callToServerWithTokenAndUserObject("post",'/v1/user/update_profile',
    {
      id: user.id
    },
    {
      username:fullName,
      address:address,
      age:age,
      phoneNumber:phoneNumber
    },user.accessToken)
    .then((result) => {
      toast.success(result.status);
      let userData = result.data;
      Object.assign(userData,{accessToken:user.accessToken});
      dispatch(setData(userData));
    })
    .catch((text) => toast.error(text)).finally(() => setLoading(false));
  }

  return <div className='d-flex flex-column my-4 justify-content-center align-items-center w-100'>
    <img src="/assets/icon/user.png" alt="Avatar" className="avatar" style={{border:"double",borderColor:"#043d5d",height:"100px",width:"100px",padding:"5px"}}></img>
    <div style={{width:"600px"}}>
      <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px"}}>
        <span className='sc-heading text-uppercase' style={{width:"300px"}}>full name:</span>
        <TextFieldEditable fontSize={props.FONT_SIZE} width="100%" disabled={false} value={fullName} save={value=>setFullName(value)} required={true}/>
      </div> 
      <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px"}}>
        <span className='sc-heading text-uppercase' style={{width:"300px"}}>address:</span>
        <TextFieldEditable fontSize={props.FONT_SIZE} width="100%" disabled={false} value={address} save={value=>setAddress(value)} required={true}/>
      </div> 
      <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px"}}>
        <span className='sc-heading text-uppercase' style={{width:"300px"}}>age:</span>
        <TextFieldEditable type="number" fontSize={props.FONT_SIZE} width="100%" disabled={false} value={age} save={value=>setAge(value)} required={true}/>
      </div>
      <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px"}}>
        <span className='sc-heading text-uppercase' style={{width:"300px"}}>phone Number:</span>
        <TextFieldEditable fontSize={props.FONT_SIZE} type="number" width="100%" disabled={false} value={phoneNumber} save={value=>setPhoneNumber(value)} required={true}/>
      </div>
      <div className='my-3'>
        {loading ? <div className="spinner-grow"></div> : <ButtonComponent label="update information account" onClick={updateProfile} />}
      </div>
    </div>
  </div>
}