/* todo setja upp server */
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    console.log("er inn í server");
    server.get('/todo/:id', (req, res) => {
      console.log("er inn í server");
      app.render(req, res, '/todo', { id: req.params.id });
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
