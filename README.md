# juzt
Minimal .js unit testing


## Installation

```shell
$ npm install juzt
```


## Usage

**juzt** tests take two arguments: a description string and a boolean expression.
A test will pass if the expression evaluates to true and fail if it evaluates to false

```javascript
const juzt = require('juzt')

// these tests pass:

let a = 1
let b = 2
juzt.test('sum of a and b is 3', a + b == 3)

juzt.test('this test passes', true)

juzt.test('', true)

juzt.test('boolean expression', !!'test')

juzt.test('boolean expression', !'test')

// these tests fail:

juzt.test('evaluates to false', false)

// these tests throw an error:

juzt.test('not a boolean', 1)

juzt.test('not a boolean', 0)

// end testing

juzt.over()
```

Run
```shell
node yourtest.js
```

Useful for testing modules with [`npm test`](https://docs.npmjs.com/cli/test)

###### Licensed under MIT
