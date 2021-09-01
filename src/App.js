import React from 'react';
import './App.scss';
import {
  PATH_BASE,
  PATH_SEARCH,
  PARAM_LIMIT,
} from './constants/api-endpoint';
import Filters from './components/filters';
import LaunchesWithLoading from './components/withLoading';
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
      isLoading: false,
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
    };
    if (this.state.successLaunch) {
      url += `&launch_success=${this.state.successLaunch}`;
    };
    if (this.state.successLanding) {
      url += `&land_success=${this.state.successLanding}`;
    };
    this.setState({ isLoading: true });
    axios(url)
      .then(result => this.setState({ 
        isLoading: false, 
        results: result.data 
      }))
      .catch(error => this.setState({ error }));
  };

  componentDidMount() {
    this.fetchRequestedLaunches();
  };

  render() {
    const {
      results,
      isLoading,
      error,
    } = this.state;

    return (
      <div className="app">
        <h4 className="app__headline">SpaceX Launch Programs</h4>
        <div className="signature"><strong>Developed by:</strong> Libor Marko</div>
        <div className="app__container">
          <Filters
            onInputChange={this.handleCallback}
          />
          {error 
            ? <div className="error-status">
                Oops, something went wrong...
              </div>
            : <LaunchesWithLoading
                isLoading={isLoading}
                results={results}
              />
          }
        </div>
      </div>
    )
  }
}

export default AppContainer;