import Login from "./User/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./User/Register";


function App() {
	return <Routes>
		<Route index path="/" element={<Login />} />
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register/>} />
	</Routes>
}

export default App;
