# how to use es lint in sublime 

Install `sublime-linter` package using package control. Sublime linter working as linter framework.

Now install `sublime-linter-eslint` and `sublime-linter-eslint-contrib-d` sublime package using package control.   


Install `eslint` and `eslint_d` node package globally

~~~bash
npm install -g eslint eslint_d
~~~

in case of vs code just install eslint package 


Once install all these project you have to run `eslint --init` in your project root from terminal. 

# pure nodejs server

~~~bash
const http = require('http');

function handler(req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' });
  res.write('I am web server');
  res.end();
}
const server = http.createServer(handler);

server.listen(3000);
~~~