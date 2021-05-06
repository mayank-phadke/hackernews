import React from "react"
import { withRouter } from "react-router-dom";

class CategoryFilters extends React.Component {

	constructor(props) {
		super(props)
		this.onFilterSelected = this.onFilterSelected.bind(this)
	}

	render() {
		return (
			<div className="d-flex justify-content-end">
				<div className="form-check form-check-inline">
					<input className="form-check-input"
						name="categoryRadio"
						type="radio"
						id="topRadio"
						value="top"
						checked={this.props.selectedFilter === "top" || this.props.selectedFilter === ""}
						onChange={this.onFilterSelected} />
					<label className="form-check-label" htmlFor="topRadio">Top</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input"
						name="categoryRadio"
						type="radio"
						id="askRadio"
						value="ask"
						checked={this.props.selectedFilter === "ask"}
						onChange={this.onFilterSelected} />
					<label className="form-check-label" htmlFor="askRadio">Ask</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input"
						name="categoryRadio"
						type="radio"
						id="showRadio"
						value="show"
						checked={this.props.selectedFilter === "show"}
						onChange={this.onFilterSelected} />
					<label className="form-check-label" htmlFor="showRadio">Show</label>
				</div>
				<div className="form-check form-check-inline">
					<input className="form-check-input"
						name="categoryRadio"
						type="radio"
						id="jobsRadio"
						value="jobs"
						checked={this.props.selectedFilter === "jobs"}
						onChange={this.onFilterSelected} />
					<label className="form-check-label" htmlFor="jobsRadio">Jobs</label>
				</div>
			</div>
		)
	}

	onFilterSelected(event) {
		this.props.history.push(event.target.value)
	}
}

export default withRouter(CategoryFilters);