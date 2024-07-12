import { io } from 'socket.io-client';

export const socket = io.connect("https://hope-shelter-api.onrender.com/", {
  path: '/socket.io',
});
