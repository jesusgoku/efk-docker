import { createLogger, format, transports } from 'winston';

import { NODE_ENV, LOG_LEVEL, APP_NAME } from './config';

const formatLogger = NODE_ENV === 'production'
    ? format.combine(format.timestamp(), format.json())
    : format.combine(format.timestamp(), format.prettyPrint());

const logger = createLogger({
    format: formatLogger,
    level: LOG_LEVEL,
    transports: [
        new transports.Console(),
    ],
    defaultMeta: { service: APP_NAME, },
});

export default logger;