import React from "react"
import "./SearchPage.css"
import StoryList from "./Components/StoryList";
import hackerNewsAPI from "../API/hackerNewsAPI";
import CategoryFilters from "./Components/CategoryFilters";
import LoadingSpinner from "../Components/LoadingSpinner";
import { withRouter, Link } from "react-router-dom";

class SearchPage extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			storyIdArray: [],
			searchQuery: "",
		}
		this.fetchDataTimer = null;

		this.clearStoryData = this.clearStoryData.bind(this);
		this.fetchStoryData = this.fetchStoryData.bind(this);
		this.setFetchDataTimer = this.setFetchDataTimer.bind(this)
	}

	componentDidMount() {
		this.fetchStoryData();
		this.setFetchDataTimer();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.filter !== this.props.filter) {

			if (this.fetchDataTimer) {
				clearInterval(this.fetchDataTimer)
			}

			this.clearStoryData();
			this.fetchStoryData();
			this.setFetchDataTimer();
		}
	}

	setFetchDataTimer() {
		this.fetchDataTimer = setInterval(() => {
			console.log("Fetching Data");
			this.fetchStoryData();
		}, 60000);
	}

	componentWillUnmount() {
		clearInterval(this.fetchDataTimer)
	}

	clearStoryData() {
		this.setState({ storyIdArray: [] })
	}

	fetchStoryData() {
		let ApiCall;
		switch (this.props.filter) {
			default:
			case "top":
				ApiCall = hackerNewsAPI.getTopStories()
				break;
			case "ask":
				ApiCall = hackerNewsAPI.getAskStories()
				break;
			case "show":
				ApiCall = hackerNewsAPI.getShowStories()
				break;
			case "jobs":
				ApiCall = hackerNewsAPI.getJobStories()
				break;
		}

		ApiCall
			.then((data) => {
				this.setState({ storyIdArray: data })
			})
			.catch((err) => {
				console.error("Error fetching data", err)
			})
	}

	render() {
		return (
			<div>
				<header>
					<nav className="navbar navbar-dark myNavbar">
						<div className="container-fluid">
							<Link to="/" className="navbar-brand mb-0 h1">HackerNews LIVE</Link>
							<a
								href="http://mayank-phadke.github.io/"
								target="_blank"
								rel="noreferrer"
								className="text-light text-decoration-none">
								Developed By: <span className="developer-name text-decoration-underline">Mayank Phadke</span>
							</a>
						</div>
					</nav>
				</header>
				<main className="container my-3">
					<div className="row align-items-center mb-3">
						<div className="col">
							<input
								type="text"
								className="form-control m-2"
								placeholder="Search by title, user..."
								value={this.state.searchQuery}
								onChange={(e) => {
									this.setState({ searchQuery: e.target.value })
								}} />
						</div>
						<div className="col">
							<CategoryFilters
								selectedFilter={this.props.filter} />
						</div>
					</div>
					{
						this.state.storyIdArray.length === 0 ?
							<LoadingSpinner /> :
							<StoryList
								searchQuery={this.state.searchQuery}
								storyIdArray={this.state.storyIdArray} />
					}
				</main>
			</div>
		)
	}
}

export default withRouter(SearchPage);
