import React, { useState } from "react";
import Users from "./Users";

function GetUser() {
	const [user, setUser] = useState([]);
	const [isLoading, setisLoading] = useState(true);
	const getdata = async () => {
		try {
			const userdata = await fetch("https://reqres.in/api/users?page=1");
			const result = await userdata.json();
			setUser(result.data);
			setisLoading(false);
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<h1 className="admin_panel">
				<span className="wlc">Welcome to</span>
				<span className="admin">Admin Panel</span>
			</h1>

			<div className="getusers_div">
				<button className="get_users" onClick={getdata}>
					
					Get Users
				</button>
			</div>
			<Users isLoading={isLoading} user={user} />
		</>
	);
}

export default GetUser;
