import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});

const token = process.env.TOKEN;
console.log(token);

// Resto de tu código aquí

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
