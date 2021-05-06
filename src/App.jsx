import React from "react"
import SearchPage from "./Pages/SearchPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/top">
                        <SearchPage filter="top" />
                    </Route>
                    <Route path="/ask">
                        <SearchPage filter="ask" />
                    </Route>
                    <Route path="/show">
                        <SearchPage filter="show" />
                    </Route>
                    <Route path="/jobs">
                        <SearchPage filter="jobs" />
                    </Route>
                    <Route path="/">
                        <SearchPage filter="top" />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
