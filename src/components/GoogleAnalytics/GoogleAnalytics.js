import ReactGa from 'react-ga';

const GoogleAnalytics = () => {
    // google analytics id
    const GA_ID = 'G-WZ58G5T1DN';

    ReactGa.initialize(
        GA_ID, {
            debug: true,
            titleCase: false,
            standardImplementation: true
        }
    );

    ReactGa.pageview(window.location.pathname + window.location.search);

    ReactGa.exception({
        description: 'An error occurred',
        fatal: true
    });

    ReactGa.timing({
        category: 'JS Libraries',
        variable: 'load',
        value: 20, // in milliseconds
        label: 'CDN libs'
    });
};

export default GoogleAnalytics;