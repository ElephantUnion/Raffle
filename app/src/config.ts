import metadata from './metadata.json';

const config = {
    APP_VERSION_NUMBER: metadata.versionNumber || 0,
    VERSION_CHECK_URL: process.env.REACT_APP_VERSION_CHECK_URL || '',
    DEBUG_MODE: process.env.REACT_APP_DEBUG_MODE === 'true',
};

export default config;
