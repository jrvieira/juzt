## Installation

```shell
$ npm install juzt
```


## Usage

```javascript
const juzt = require('juzt')

let a = 1
let b = 2

// juzt test takes two arguments, a description string and an expression that evaluates to true or false
juzt.test('sum of a and b is 3', a + b == 3)

juzt.test('this test passes', true)
juzt.test('this test fails', false)
juzt.test('this test throws an error', 1)
juzt.test('this test also throws an error', 1)

juzt.over()
```


###### Licensed under MIT
