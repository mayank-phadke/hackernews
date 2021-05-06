import React from "react"

export default class LoadingSpinner extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <div className="spinner-border me-3"></div>
                    Loading...
            </div>
        )
    }
}