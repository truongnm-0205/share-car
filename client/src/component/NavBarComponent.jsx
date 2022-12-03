import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postToServerWithToken } from '../services/getAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { setData } from '../redux/UserSlice';

export default function NavBarComponent(props) {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const nav = useNavigate();

	const logOut = () => {
		if(confirm(`Log out from ${user.data.username}`)){
      postToServerWithToken('/v1/auth/logout',{},user.data.accessToken)
      .then((result) => {
        toast.success(result.status);
        dispatch(setData({}));
        nav('/login');
      })
      .catch((text) => toast.error(text));
		}
	};

	return (
		<nav
			className="navbar navbar-expand-lg w-100 sc-background-color py-3">
			<div className="container-fluid">
				<div className="container d-flex justify-content-between align-items-center">
					<div className='d-flex flex-row justify-content-end align-items-center'>
          <div
						className="rounded mb-1"
						style={{
							height: '30px',
							width: '30px',
							backgroundImage: `url("/assets/icon/taxi.png")`,
							backgroundSize: '100% 100%',
						}}></div>
					<h2 className="p-0 mb-0 ms-2" style={{fontWeight:"600",color:"white"}}>Share Car</h2>
          </div>
					
					<div className="dropdown">
						<button
							className="btn btn-outline-light dropdown-toggle d-flex flex-row align-items-center"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							<div
								className="me-2"
								style={{
									height: '20px',
									width: '20px',
									backgroundImage: `url("/assets/icon/user-icon.png")`,
									backgroundSize: '100% 100%',
								}}></div>
							<span className="me-1 fw-bold">Welcome: {user.data.username}</span>
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href='/profile' style={{ cursor: 'pointer' }}>
									Profile
								</a>
							</li>
							<li>
								<a className="dropdown-item" onClick={logOut} style={{ cursor: 'pointer' }}>
									Log out
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
