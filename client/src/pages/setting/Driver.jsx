import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { TextFieldEditable } from '../../common/FieldInput';
import ButtonComponent from '../../component/ButtonComponent';
import { setDataDriver } from '../../redux/DriverSlice';
import { callToServerWithTokenAndUserObject } from '../../services/getAPI';

export default function Driver(props){
  const driver = useSelector(state=>state.driver.data);
  const user = useSelector(state=>state.user.data);
  const [carName,setCarName] = useState(driver.car_name?driver.car_name:'');
  const [maxUser,setMaxUser] = useState(driver.max_user?driver.max_user:'');
  const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();

  const createDriver = (e) =>{
    if(!carName) toast.error("Name car is required");
    else if(!maxUser) toast.error("Max user car is required");
    else{
      setLoading(true);
      callToServerWithTokenAndUserObject("post",'/v1/driver/create',
      {
        id: user.id
      },
      {
        car_name:carName,
        max_user:maxUser
      },user.accessToken)
      .then((result) => {
        toast.success(result.status);
        dispatch(setDataDriver(result.data));
      })
      .catch((text) => toast.error(text)).finally(() => setLoading(false));
    }
  }

  const deleteDriver = (e) =>{
    if(confirm("Do you want to delete this driver")){
      setLoading(true);
      callToServerWithTokenAndUserObject("post",'/v1/driver/destroy',
      {

      },
      {id: driver.id}
      ,user.accessToken)
      .then((result) => {
        toast.success(result.status);
        dispatch(setDataDriver({}));
        setCarName('');
        setMaxUser('');
      })
      .catch((text) => toast.error(text)).finally(() => setLoading(false));
    }
  }

  return <div className='d-flex flex-column mb-5 justify-content-center align-items-center w-100'>
    <div style={{width:"600px"}}>
      {
          driver.id ?
        <h3 className='mt-3 sc-color fw-bold'>Delete driver</h3>
        :
        <h3 className='mt-3 sc-color fw-bold'>Create new driver</h3>
      }
      <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px"}}>
        <span className='sc-heading text-uppercase' style={{width:"300px"}}>Name car:</span>
        <TextFieldEditable fontSize={props.FONT_SIZE} width="100%" disabled={driver.id} value={carName} save={value=>setCarName(value)} required={true}/>
      </div> 
      <div className='d-flex flex-row justify-content-start align-items-center my-4' style={{borderBottom:"double",paddingBottom:"5px"}}>
        <span className='sc-heading text-uppercase' style={{width:"300px"}}>Max of people:</span>
        <TextFieldEditable fontSize={props.FONT_SIZE} width="100%" type="number" disabled={driver.id} value={maxUser} save={value=>setMaxUser(value)} required={true}/>
      </div>
      {
        driver.id ? <div className='mt-4 d-flex justify-content-center'>
          {loading ? <div className="spinner-grow"></div> : <ButtonComponent btnType="btn-danger" label="delete driver account" onClick={deleteDriver}/>}
        </div>
        :
        <div className='mt-4 d-flex justify-content-center'>
          {loading ? <div className="spinner-grow"></div> : <ButtonComponent btnType="btn-success" label="create driver account" onClick={createDriver} />}
        </div>
      }
    </div>
  </div>
}