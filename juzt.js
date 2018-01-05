/*
MIT License

Copyright (c) 2018 jrvieira

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

let failed = false

module.exports.test = function (description, result) {
	// validate test arguments
	if (typeof description != 'string') throw new TypeError('test description is not a string')
	if (typeof result != 'boolean') throw new TypeError('test result is not a boolean')

	failed = failed || !result
	console.log(result ? '\x1b[32m'+'v'+'\x1b[0m' : '\x1b[31m'+'x'+'\x1b[0m', '\x1b[2m'+description+'\x1b[0m')

	return result
}

module.exports.over = function () {
	console.log('\n', failed ? '\x1b[31m'+'test failed'+'\x1b[0m' : '\x1b[32m'+'all tests passed'+'\x1b[0m', '\n')	
}

process.exitCode = failed
