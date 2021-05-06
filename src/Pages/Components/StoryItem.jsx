import React from "react"
import "./StoryItem.css"
import moment from "moment"

export default class StoryList extends React.Component {

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <a href={this.props.url} className="stretched-link text-decoration-none text-reset" target="_blank" rel="noreferrer">
                        <h5 className="card-title">{this.props.title}</h5>
                    </a>
                    <small className="text-muted">
                        {this.props.points} points {" "}
                        by {this.props.author} {" "}
                        {moment.unix(this.props.time).fromNow()} {" "}
                        | {this.props.comments} {" "}
                        {this.props.comments === 1 ? "comment" : "comments"}
                    </small>
                </div>
            </div>
        )
    }
}
