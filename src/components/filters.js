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
        this.props.onInputChange(e);
    };

    render() {
        return (
            <div className="filters__container">
                <span className="filters__container--headline">Filters</span>
                <div className="filters__container--years">
                    <h6 className="filters__container--subheadline">Launch Year</h6>
                    {
                        FILTERS_YEARS.map(item => (
                            <span
                                key={item.id}
                                className="filter__item"
                            >
                                <input
                                    type='radio'
                                    id={item.id}
                                    name={item.name}
                                    value={item.value}
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
                <div className="filters__container--launch">
                    <span className="filters__container--subheadline">Succesful launch</span>
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
                                    value={item.value}
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
                    <span className="filters__container--subheadline">Succesful landing</span>
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
                                    value={item.value}
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
        )
    }
}

export default Filters;