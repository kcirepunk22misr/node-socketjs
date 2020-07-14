import { Socket, Server } from 'socket.io';

export const desconectar = (client: Socket) => {
  client.on('disconnect', () => {
    console.log('Cliente Desconectado');
  })
}

// Escuchar mensajes
export const mensaje = (client: Socket, io: Server) => {
  client.on('mensaje', ( payload: {de: string, cuerpo: string} ) => {
      console.log('Mensaje Recibido!', payload);

      io.emit('mensaje-nuevo', payload);
  });
}
