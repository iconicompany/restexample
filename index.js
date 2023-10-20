import http from 'http';
import { createRouter } from 'next-connect';

const port = process.env.HTTP_PORT || 3000;
const host = process.env.HTTP_HOST || '127.0.0.1';

const handler = createRouter()
  .get('/heartbeat', (req, res) => {
    res.end('OK');
  })
http.createServer(handler).listen(port, host);
