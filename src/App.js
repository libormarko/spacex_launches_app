import React from 'react';
import './App.scss';
import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_LIMIT,
} from './constants/api-endpoint';
import Launches from './components/launches';
import Filters from './components/filters';
import axios from 'axios';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedYear: null,
      successLaunch: null,
      successLanding: null,
      results: null,
      error: null,
    }
    this.handleCallback = this.handleCallback.bind(this);
    this.fetchRequestedLaunches = this.fetchRequestedLaunches.bind(this);
  }

  handleCallback(e) {
    let checkedItemValue = e.target.value;
    let checkedItemName = e.target.name;
    checkedItemName === "filterYear" && this.setState({ checkedYear: checkedItemValue }, () => this.fetchRequestedLaunches());
    checkedItemName === "filterLaunch" && this.setState({ successLaunch: checkedItemValue }, () => this.fetchRequestedLaunches());
    checkedItemName === "filterLanding" && this.setState({ successLanding: checkedItemValue }, () => this.fetchRequestedLaunches());
  };

  fetchRequestedLaunches() {
    let url = `${PATH_BASE}${PATH_SEARCH}${PARAM_LIMIT}`;
    if (this.state.checkedYear) {
      url += `&launch_year=${this.state.checkedYear}`;
    }
    if (this.state.successLaunch) {
      url += `&launch_success=${this.state.successLaunch}`;
    }
    if (this.state.successLanding) {
      url += `&land_success=${this.state.successLanding}`;
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
          onInputChange = {this.handleCallback}
        />
        <Launches
          results={this.state.results}
        />
      </div>
    )
  }
}

export default AppContainer;