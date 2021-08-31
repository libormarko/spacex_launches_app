import React from 'react';
import './App.scss';
import { FILTERS_YEARS, FILTERS_LAUNCH, FILTERS_LANDING } from './constants/filters';
import Checkbox from './components/checkbox';

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let item = e.target.name;
    let isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked)}));
    console.log(this.state)
  }

  render() {
    return(
      <React.Fragment>
        {
          FILTERS_YEARS.map(item => (
            <label key={item.id}>
              {item.label}
              <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
            </label>
          ))
        }
      </React.Fragment>
    )
  }
}

export default AppContainer;