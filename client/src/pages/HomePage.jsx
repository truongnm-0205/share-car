import React, { useState } from 'react';
import NavBarComponent from '../component/NavBarComponent.jsx';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function HomePage() {
	const user = useSelector((state) => state.user);
	const nav = useNavigate();
	if (user.data) {
		nav('/login');
	}
	return (
		<div
			className="d-flex flex-column justify-content-center align-items-center"
			style={{
				height: '100%',
				backgroundImage: `url("/assets/images/login_background.jpg")`,
				backgroundSize: '100% 100%',
			}}>
			<NavBarComponent />
			<div className="d-flex flex-row justify-content-start align-items-center h-100 w-100">
				<div
					style={{
						backgroundColor:"white",
						height: '100%',
						backgroundImage: `url("/assets/images/taxi-car.png")`,
						backgroundSize: '100% 100%',
						width: '845px',
					}}></div>
				<div className="d-flex flex-column align-items-center justify-content-center">
					<div style={{ textAlign: 'justify' }}></div>
				</div>
			</div>
		</div>
	);
}
