import logger from './logger';

function loggerMiddleware(req, _res, next) {
    logger.http({
        path: req.originalUrl,
        method: req.method,
        ip: req.ip,
    });

    next();
}

function errorHandler(err, req, res, next) {
    logger.error(err.message);

    res.json({
        code: err.code || 500,
        errors: [
            { message: err.message },
        ],
    });
}

export {
    loggerMiddleware,
    errorHandler,
}