import React from "react";

function Card(props) {
	return (
		<>
			<div className="grid-items">
				<div className="card">
					<div className="card_header">
						<img src={props.imgsrc} alt="" className="profile_img" />
					</div>
					<div className="card_body">
						<div className="card_text">
							<p>First Name : {props.fname}</p>
							<p>Last Name : {props.lname}</p>
							<p className="email">Email : {props.emaul}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
