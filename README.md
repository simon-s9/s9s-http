# s9s-http

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