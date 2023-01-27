
import { Router } from 'express';
import { PUERTO } from '../../app.js';
import { logger } from '../../Configuracion/logger.js';

const ruta = Router();


ruta.get('/', (solicitud, respuesta) => {
    const fecha = new Date().toLocaleDateString()
    respuesta.send(`Servidor express iniciado en el PUERTO: (${PUERTO}) -~- FUNCA PIOLA :) -~- PID: (${process.pid}) -~- FECHA: (${fecha})`)
})


ruta.get('*', (solicitud, respuesta) => {
    const { method, url } = solicitud;
    logger.warn(`Ruta ${method} ${url} no implementada`)
    respuesta.send(`Ruta ${method} ${url} no está implementada`)
})

export { ruta as RutaServidor };