import React from 'react';
import './App.scss';
import { FILTERS_YEARS, FILTERS_LAUNCH, FILTERS_LANDING } from './constants/filters';
import Checkbox from './components/checkbox';
import LaunchedResults from './components/launchedResults';
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

    this.handleChange = this.handleChange.bind(this);
    this.fetchRequestedLaunches = this.fetchRequestedLaunches.bind(this);
  }

  handleChange(e) {
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
        <div className="filters__container">
          <div className="filters__container--years">
            {
              FILTERS_YEARS.map(item => (
                <span
                  key={item.id}
                  className="filter__item"
                >
                  <Checkbox
                    id={item.label}
                    name={item.name}
                    //checked={this.state.checkedItems.get(item.name)}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor={item.label}
                  >
                    {item.label}
                  </label>
                </span>
              ))
            }
          </div>
          <div className="filters__container--launch">
            {
              FILTERS_LAUNCH.map(item => (
                <span
                  key={item.id}
                  className="filter__item"
                >
                  <Checkbox
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    //checked={this.state.checkedItems.get(item.name)}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor={item.id}
                  >
                    {item.label}
                  </label>
                </span>
              ))
            }
          </div>
          <div className="filters__container--landing">
            {
              FILTERS_LANDING.map(item => (
                <span
                  key={item.id}
                  className="filter__item"
                >
                  <Checkbox
                    id={item.id}
                    name={item.name}
                    value={item.value}
                    //checked={this.state.checkedItems.get(item.name)}
                    onChange={this.handleChange}
                  />
                  <label
                    htmlFor={item.id}
                  >
                    {item.label}
                  </label>
                </span>
              ))
            }
          </div>
        </div>
        <LaunchedResults
          results={this.state.results}
        />
      </div>
    )
  }
}

export default AppContainer;