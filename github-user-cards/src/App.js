import React from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import UserCard from "./UserCard";
import FollowerDetails from "./FollowerDetails";

class App extends React.Component {
	state = {
		users: [],
		cardSelected: false,
		followers: [],
		error: "",
	};

	searchForUser = (user) => {
		axios
			.get(`https://api.github.com/users/${user}`)
			.then((res) => {
				this.setState({
					users: [
						...this.state.users,
						{
							id: res.data.id,
							image: res.data.avatar_url,
							login: res.data.login,
							name: res.data.name,
							bio: res.data.bio,
							followers: res.data.followers,
							following: res.data.following,
							followers_url: res.data.followers_url,
						},
					],
				});
				this.setState({ error: "" });
			})
			.catch((err) => {
				this.setState({ error: "No user found!" });
			});
	};

	clearCards = () => {
		this.setState({ users: [] });
	};

	showFollowers = (e, url) => {
		e.preventDefault();
		if (!this.state.cardSelected) {
			this.setState({ cardSelected: !this.state.cardSelected });
			console.log(url);
			axios
				.get(url)
				.then((res) => this.setState({ followers: res.data }))
				.catch((err) => console.log(err));
		} else this.setState({ cardSelected: !this.state.cardSelected });
	};

	render() {
		return (
			<>
				<div className="container w-50 my-5">
					<SearchForm
						searchForUser={this.searchForUser}
						error={this.state.error}
						clearCards={this.clearCards}
					/>
				</div>
				<div className="container mw-100 w-75 d-flex flex-wrap justify-content-start px-0">
					{this.state.users.map((user) => {
						return (
							<UserCard
								key={user.id}
								image={user.image}
								login={user.login}
								name={user.name}
								followers={user.followers}
								following={user.following}
								followers_url={user.followers_url}
								showFollowers={this.showFollowers}
								cardSelected={this.state.cardSelected}
							/>
						);
					})}
					<FollowerDetails
						followers={this.state.followers}
						showFollowers={this.showFollowers}
						cardSelected={this.state.cardSelected}
					/>
				</div>
			</>
		);
	}
}

export default App;
