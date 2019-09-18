const http = require('http');
const url = require('url');

function handler(req, res) {
  const parsedUrl = url.parse(req.url, true);
  res.setHeader('x-server-date', new Date());
  if (parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write('I am web server');
    res.end();
  } else if (parsedUrl.pathname === '/times') {
    res.writeHead(200, { 'Content-type': 'text/html' });
    const date = new Date().toDateString();
    res.write(`Current time is ${date}`);
    res.end();
  } else if (parsedUrl.pathname === '/hello') {
    const { name } = parsedUrl.query;
    if (!name) {
      res.writeHead(400, { 'Content-type': 'text/html' });
      res.end();
    }
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.write(`I am web server and my name is -  ${name}`);
    res.end();
  } else if (parsedUrl.pathname.startsWith('/user')) {
    const regex = new RegExp(/user\/(.+)/);
    const matches = regex.exec(parsedUrl.pathname);
    if (matches && matches[0]) {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.write(`I am web server and my name is -  ${matches[1]}`);
      res.end();
    } else {
      res.writeHead(400, { 'Content-type': 'text/html' });
      res.end();
    }
  } else {
    res.writeHead(404, { 'Content-type': 'text/html' });
    res.end();
  }
}
const server = http.createServer(handler);

server.listen(3000);
