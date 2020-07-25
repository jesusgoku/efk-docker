const {
    PORT = 5000,
    NODE_ENV = 'production',
    LOG_LEVEL = 'warn',
    APP_NAME = 'winston-app',
} = process.env;

const logLevels = ['error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly'];

if (!logLevels.includes(LOG_LEVEL)) {
    throw new Error(`LOG_LEVEL="${LOG_LEVEL}" env var is not a valid value. Available values: ${logLevels.join(', ')}`);
}

export {
    PORT,
    NODE_ENV,
    LOG_LEVEL,
    APP_NAME,
};