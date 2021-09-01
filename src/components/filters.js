import React from 'react';
import { FILTERS_YEARS, FILTERS_LAUNCH, FILTERS_LANDING } from '../constants/filters';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.parentCallback(e);
    };

    render() {
        return (
            <div className="filters__container">
                <div className="filters__container--years">
                    {
                        FILTERS_YEARS.map(item => (
                            <span
                                key={item.id}
                                className="filter__item"
                            >
                                <input
                                    type='radio'
                                    id={item.label}
                                    name={item.name}
                                    onChange={this.handleChange}
                                    //value={item.value}
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
                                <input
                                    type='radio'
                                    id={item.id}
                                    name={item.name}
                                    onChange={this.handleChange}
                                    value={item.value}
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
                                <input
                                    type='radio'
                                    id={item.id}
                                    name={item.name}
                                    onChange={this.handleChange}
                                    value={item.value}
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
        )
    }
}

export default Filters;