import React from 'react';
import Loading from '../components/loading';
import Launches from '../components/launches';

const withLoading = (Component) => ({ isLoading, ...rest }) =>
    isLoading
        ? <Loading />
        : <Component {...rest} />;

const LaunchesWithLoading = withLoading(Launches);

export default LaunchesWithLoading;