import Login from './User/Login.jsx';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Register from './User/Register.jsx';
import HomePage from './pages/HomePage.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


function App() {
	const user = useSelector((state) => state.user);
	const nav = useNavigate();

	useEffect(() => {
    if (!user.data.accessToken && window.location.href!='http://localhost:5173/register') {
      toast.warning("No account login");
      nav("/login");
	  }
	},[user.data.accessToken])

	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
