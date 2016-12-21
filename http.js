const url = require('url');
const protocols = {
    http: require('http'),
    https: require('https')
};
const promise = require('promise');

module.exports = {
    request: request
};

/**
 * @name request
 * @description Makes an http/s request
 * @param {String} requestMethod Request method GET,POST,PUT...
 * @param {String} requestUrl The url to request
 * @param {String} requestData The data to send
 * @param {Object} requestHeaders Object containing http request headers (default: application/json)
 * @returns {Promise}
 * @public
 */
function request(requestMethod, requestUrl, requestData, requestHeaders) {
    return new promise((resolve, reject) => {
        requestHeaders = requestHeaders || {};
        if (!requestHeaders['Content-Type']) {
            requestHeaders['Content-Type'] = 'application/json';
        }
        if (requestData.length > 0) {
            requestHeaders['Content-Length'] = requestData.length;
        }
        var options = url.parse(requestUrl),
            protocol = options.protocol.substr(0, options.protocol.length - 1);
        options.method = requestMethod || 'GET';
        options.headers = requestHeaders;
        var req = protocols[protocol].request(
            options,
            function (res) {
                var resBody = '';
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    resBody += chunk;
                });
                res.on('end', function () {
                    resolve(resBody);
                });
            }
        );
        req.on('error', reject);
        req.write(requestData || '');
        req.end();
    });
}