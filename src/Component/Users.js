import React, { isValidElement } from "react";
import Loader from "./Loader";
import Card from "./Card";

function Users({ isLoading, user }) {
	return isLoading ? (
		<Loader />
	) : (
		<div className="grid-container">
			{user.map((val, index) => {
				return (
					<Card
						key={index}
						fname={val.first_name}
						lname={val.last_name}
						email={val.email}
						imgsrc={val.avatar}
					/>
				);
			})}
		</div>
	);
}

export default Users;
