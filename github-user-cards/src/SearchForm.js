import React from "react";

class SearchForm extends React.Component {
	state = {
		searchInput: "",
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.searchForUser(this.state.searchInput);
		this.setState({ searchInput: "" });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit} className="w-75 mx-auto">
				<label>Github username:</label>
				<input
					className="form-control mb-1 mt-1"
					placeholder="Enter username"
					value={this.state.searchInput}
					onChange={(e) =>
						this.setState({ searchInput: e.target.value })
					}
				/>
				<small className="form-text text-muted mb-3">
					Make sure it's a valid username!
				</small>
				<div className="w-75 mx-auto d-flex justify-content-around">
					<button className="btn btn-primary">Add Below</button>
					<button
						type="button"
						className="btn btn-danger"
						onClick={this.props.clearCards}
					>
						Clear Cards
					</button>
				</div>
			</form>
		);
	}
}

export default SearchForm;
