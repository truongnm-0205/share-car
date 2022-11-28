import React, { useState } from 'react';
import NavBarComponent from '../component/NavBarComponent.jsx';

export default function HomePage() {
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
						height: '100%',
						backgroundImage: `url("/assets/images/taxi-car.png")`,
						backgroundSize: '100% 100%',
						width: '750px',
					}}></div>
				<div className="d-flex flex-column align-items-center justify-content-center">
					<div style={{ textAlign: 'justify' }}></div>
				</div>
			</div>
		</div>
	);
}
