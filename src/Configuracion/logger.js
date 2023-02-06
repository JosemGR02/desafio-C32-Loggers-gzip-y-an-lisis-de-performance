
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~| Config registrador PINO JS |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


import dotenv from "dotenv";
dotenv.config();

import pino from 'pino';
import pretty from 'pino-pretty';
import moment from 'moment';

const configPretty = ({
    base: { pid: process.pid },
    timestamp: () => `, "Hora": "${moment().format()}" `
}, pretty())


function crearLoggerProd() {
    const loggerProdWarn = pino('Warn.log', configPretty)

    loggerProdWarn.level = 'warn'

    const loggerProdError = pino('Error.log', configPretty)

    loggerProdError.level = 'error'

    return loggerProdWarn, loggerProdError
}

function crearloggerDev() {
    const loggerDEV = pino(configPretty)

    loggerDEV.level = 'info'

    return loggerDEV
}

export let logger = null

if (process.env.LOGGER_MODO === 'PROD') {
    logger = crearLoggerProd()
} else {
    logger = crearloggerDev()
    logger.info('Logger con DEV');
}


