# s9s-http

[![npm](https://img.shields.io/npm/v/s9s-http.svg)](https://www.npmjs.com/package/s9s-http)

## Installation
```
npm install --save s9s-http
```

## Example
```javascript
cosnt http = require('s9s-http');
http
    .request('GET', 'http://www.google.com')
    .then(console.log)
    .catch(console.error);
```