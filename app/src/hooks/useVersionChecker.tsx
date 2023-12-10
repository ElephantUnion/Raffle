import React, { useEffect, useState } from 'react'
import config from '../config';

const useVersionChecker = () => {
    const [initialized, setInitialized] = useState(false);

    const checkVersion = async () => {
      const localAppVersionNumber = config.APP_VERSION_NUMBER;
      if (config.DEBUG_MODE) console.log(localAppVersionNumber);
      try {
        let response;
        try {
          response = await (await fetch(config.VERSION_CHECK_URL)).json();
        } catch (error) {
          console.log('Error fetching version check');
          return;
        }
        const expectedAppVersionNumber = response?.data?.version || 0;
        const isAppVersionUpdated = localAppVersionNumber > 0 && localAppVersionNumber >= expectedAppVersionNumber;
        const isFetchable = expectedAppVersionNumber > 0;
        if (isAppVersionUpdated || !isFetchable) {
            console.log('App version already up to date');
            return;
        }
        console.log('App version will update');

        // Force update the app
        window.location.replace(window.location.href)
      } catch (error) {
        console.log('Version fetch failed');
      }
    }

    useEffect(() => {
        if (!initialized) {
          setInitialized(true);
          checkVersion();
        }
    }, [initialized]);

    return
}

export default useVersionChecker