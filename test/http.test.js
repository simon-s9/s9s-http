const assert = require('assert');
const http = require('../http');

describe('s9s-http', () => {

    it('should contain request method', () => {
        assert.notStrictEqual(http.request, undefined);
        assert.strictEqual(typeof (http.request), 'function');
    });

    it('should always return a promise', () => {
        const request = http.request();

        assert.strictEqual(typeof request.then, 'function');
        assert.strictEqual(typeof request.catch, 'function');
        assert.strictEqual(typeof request.finally, 'function');
    });

});