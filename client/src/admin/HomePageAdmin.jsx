import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavBarComponentAdmin from './NavBarComponentAdmin.jsx';
import { useEffect } from 'react';
import { callToServerWithTokenAndUserObject } from '../services/getAPI.jsx';
import { toast } from 'react-toastify';

export default function HomePageAdmin() {
	const user = useSelector((state) => state.user);
	const nav = useNavigate();
  const [loading,setLoading] = useState(false);
  const [listCar,setListCar] = useState([]);

  const getListCar = () => {
    console.log("check")
    setLoading(true);
    callToServerWithTokenAndUserObject("get",'/v1/admin-car/',{},{},user.accessToken)
    .then((result) => {
      toast.success(result.message);
      setListCar(result.data);
    })
    .catch((text) => toast.error(text)).finally(() => setLoading(false));
  }

  console.log(listCar)

	useEffect(()=>{
    getListCar();
	},[])
	
	return (
		<div
			className="d-flex flex-column justify-content-center align-items-center"
			style={{
				height: '100%',
				backgroundImage: `url("/assets/images/login_background.jpg")`,
				backgroundSize: '100% 100%',
			}}>
			<NavBarComponentAdmin />
			<div className="d-flex flex-row justify-content-start align-items-center h-100 w-100">
				<div className="d-flex flex-column align-items-center justify-content-center">
					<div style={{ textAlign: 'justify' }}></div>
				</div>
			</div>
		</div>
	);
}
