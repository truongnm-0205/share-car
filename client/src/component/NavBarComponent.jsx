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
			className="navbar navbar-expand-lg w-100"
			style={{ backgroundColor: 'white', borderBottom: 'groove', borderColor: '#8ecacb' }}>
			<div className="container-fluid">
				<div className="container d-flex justify-content-between align-items-center">
					<div
						className="rounded p-3"
						style={{
							height: '50px',
							width: '50px',
							backgroundImage: `url("/assets/icon/taxi.png")`,
							backgroundSize: '100% 100%',
						}}></div>
					<h1 className="sc-color" style={{fontWeight:"600"}}>Share Car</h1>
					<div className="dropdown">
						<button
							className="btn btn-outline-info dropdown-toggle d-flex flex-row align-items-center"
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
							<span className="me-1">{user.data.username}</span>
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" style={{ cursor: 'pointer' }}>
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
