import React from "react";

class UserCard extends React.Component {
	sendFollowersUrl = (e) => {
		console.log(this.props.followers_url);
		this.props.showFollowers(e, this.props.followers_url);
	};

	render() {
		const { image, name, login, followers, following } = this.props;

		return (
			<div
				className="card"
				style={
					this.props.cardSelected
						? { display: "none" }
						: { width: "30%", margin: "0 1.66% 3%" }
				}
			>
				<img
					className="card-img-top"
					src={image}
					alt="user avatar"
					style={{
						borderBottom: "1px solid rgb(0, 0, 0, .2)",
					}}
				/>
				<div className="card-body pl-4">
					<h4 className="card-title">{name || login}</h4>
					<p>
						<span className="card-text">
							<strong>Followers:</strong> {followers}
						</span>
						<span className="card-text ml-3">
							<strong>Following:</strong> {following}
						</span>
					</p>
					<button
						type="button"
						onClick={this.sendFollowersUrl}
						className="btn btn-info"
					>
						My Followers &rarr;
					</button>
				</div>
			</div>
		);
	}
}

export default UserCard;
