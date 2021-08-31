import React from 'react';
import './App.scss';
import { FILTERS_YEARS, FILTERS_LAUNCH, FILTERS_LANDING } from './constants/filters';
import Checkbox from './components/checkbox';
import LaunchedResult from './components/launchedResult';
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
      checkedItems: new Map(),
      results: null,
      error: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.fetchRequestedLaunches = this.fetchRequestedLaunches.bind(this);
    this.updateRequestedLaunches = this.updateRequestedLaunches.bind(this);
  }

  handleChange(e) {
    let item = e.target.name;
    let isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
  };

  fetchRequestedLaunches() {
    axios(`${PATH_BASE}${PATH_SEARCH}${PARAM_LIMIT}`)
        .then(result => this.setState({ results: result.data }))
        .catch(error => this.setState({ error }));
  };

  updateRequestedLaunches(data) {
    console.log(data);
  };

  componentDidMount() {
    this.fetchRequestedLaunches();
  };

  componentDidUpdate() {
    let sortedMap = new Map([...this.state.checkedItems.entries()].sort().reverse());
    sortedMap.forEach((value, key) => {
      if (value === true) {
        console.log(key)
      }
    })
  };

  render() {
    return (
      <div className="app__container">
        <div className="filters__container">
          {
            FILTERS_YEARS.map(item => (
              <span
                key={item.id}
                className="filter__item"
              >
                <Checkbox
                  id={item.name}
                  name={item.name}
                  checked={this.state.checkedItems.get(item.name)}
                  onChange={this.handleChange}
                />
                <label
                  htmlFor={item.name}
                >
                  {item.label}
                </label>
              </span>
            ))
          }
        </div>
        <div className="results__container">
          {
            this.state.results && this.state.results.map(result => 
              <LaunchedResult
                key={result.launch_date_unix}
                missionPatch = {result.links.mission_patch_small}
                missionName={result.mission_name}
                missionId={result.mission_id}
                launchYear={result.launch_year} 
                launchSuccess={result.launch_success}
                landSuccess={result.rocket.first_stage.cores[0].land_success}
              />
            )
          }
        </div>
      </div>
    )
  }
}

export default AppContainer;