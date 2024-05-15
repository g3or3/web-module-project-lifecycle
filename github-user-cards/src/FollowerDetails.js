import React from "react";

class FollowerDetails extends React.Component {
	render() {
		return (
			this.props.cardSelected && (
				<div className="container w-50">
					<div
						id="scroll-followers"
						style={{ height: "50vh", overflowY: "scroll" }}
					>
						{this.props.followers.map((follower) => {
							return (
								<div
									style={{
										display: "flex",
										justifyContent: "space-between",
										width: "70%",
										margin: "0 auto",
									}}
								>
									<p
										style={{
											textAlign: "center",
											fontWeight: "bold",
										}}
									>
										{follower.login}
									</p>
									<a
										href={
											"https://github.com/" +
											follower.login
										}
										target="_blank"
										rel="noreferrer"
										style={{ textDecoration: "none" }}
									>
										Link to my Github
									</a>
								</div>
							);
						})}
					</div>
					<button
						className="d-block btn btn-danger mt-4 mx-auto"
						onClick={this.props.showFollowers}
					>
						Close
					</button>
				</div>
			)
		);
	}
}

export default FollowerDetails;
