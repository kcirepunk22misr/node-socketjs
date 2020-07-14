import { json, urlencoded } from 'express';
import { Server } from './classes/server';
import cors from 'cors';
import router from './routes/router';

const server = new Server();

// middlewares
server.app.use(urlencoded({ extended: true }));
server.app.use(json());

// CORS
server.app.use(cors({ origin: true, credentials: true, }));

// routes
server.app.use('/', router);


server.start(() => {
  console.log('Server On Port 3000');
})
