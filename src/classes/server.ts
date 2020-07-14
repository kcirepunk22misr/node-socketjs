import express from 'express';
import { SERVER_PORT } from '../global/enviroment';
import socketIO from 'socket.io';
import http from 'http';
import * as socket from '../sockets/socket';

export class Server {

	private static _instance: Server;
	public app: express.Application;
	public port: number;
	public io: socketIO.Server;
	private httpServer: http.Server;

	private constructor() {
		this.app = express();
		this.port = SERVER_PORT;
		this.httpServer = new http.Server(this.app);
		this.io = socketIO(this.httpServer);
		this.escicharSocket();
	}

	public static get instance() {
		return this._instance || ( this._instance = new this() );
	}

	private escicharSocket() {
		console.log('Escuchando conexione');
		this.io.on('connection', (client) => {

			// Mensaje
			socket.mensaje(client, this.io);

			// Desconectar
			socket.desconectar(client);
		});
	}

	start(callback: Function) {
		this.httpServer.listen(this.port, callback());
	}
}
