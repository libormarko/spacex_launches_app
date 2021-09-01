import React from 'react';
import './App.scss';
import LaunchedResults from './components/launchedResults';
import Filters from './components/filters';
import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_LIMIT,
} from './constants/API-endpoint';
import axios from 'axios';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedYear: null,
      checkedLaunch: null,
      checkedLanding: null,
      results: null,
      error: null,
    }

    this.handleCallback = this.handleCallback.bind(this);
    this.fetchRequestedLaunches = this.fetchRequestedLaunches.bind(this);
  }

  handleCallback(e) {
    let item = e.target.id;
    let value = e.target.value;
    e.target.name === "filterYear" && this.setState({ checkedYear: item }, () => this.fetchRequestedLaunches());
    e.target.name === "filterLaunch" && this.setState({ checkedLaunch: value }, () => this.fetchRequestedLaunches());
    e.target.name === "filterLanding" && this.setState({ checkedLanding: value }, () => this.fetchRequestedLaunches());
  };

  fetchRequestedLaunches() {
    let url = `${PATH_BASE}${PATH_SEARCH}${PARAM_LIMIT}`;
    if (this.state.checkedYear) {
      url += `&launch_year=${this.state.checkedYear}`;
    }
    if (this.state.checkedLaunch) {
      url += `&launch_success=${this.state.checkedLaunch}`;
    }
    if (this.state.checkedLanding) {
      url += `&land_success=${this.state.checkedLanding}`;
    }
    axios(url)
      .then(result => this.setState({ results: result.data }))
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    this.fetchRequestedLaunches();
  };

  render() {
    return (
      <div className="app__container">
        <Filters 
          parentCallback = {this.handleCallback}
        />
        <LaunchedResults
          results={this.state.results}
        />
      </div>
    )
  }
}

export default AppContainer;