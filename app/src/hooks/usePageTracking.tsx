import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const usePageTracking = () => {
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setInitialized(true);
    }, []);

    useEffect(() => {
        if (initialized) {
            const page = window.location.pathname + window.location.search;
            ReactGA.send({ hitType: 'pageview', page });
        }
    }, [initialized, window.location]);
};

export {usePageTracking};
