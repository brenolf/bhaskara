# Bhaskara

> A library to convert numbers in full to actual numbers

Bhaskara is a small library that aims to convert written numbers in real integers for programming purposes, providing an easy interface for extending your own languages.

## Install

`$ npm install --save-dev bhaskara`

## Usage

```js
var bhaskara = require('bhaskara');

bhaskara('zero'); // 0
bhaskara('ten'); // 10
bhaskara('one hundred eighty-nine'); // 189
bhaskara('fourty-two million and one'); // 42000001
bhaskara('twenty-two trillion ninety-two'); // 22000000000092
bhaskara('a duck'); // 0, because a duck is not a number
```

## CLI

If installed globally, you can use bhaskara as a command line utility, for instance:

```
$ bhaskara fourty-two
$ 42
```

## Configuration

The function takes three arguments with the format `bhaskara(number, [locale, [mapper]])`.

### locale

Type: `json`

`locale` should be a json object with the main translations for the language. For instance, `"twenty": 20`.

### mapper

Type: `function`
Arguments: `number : number`

A function that takes a number as parameter and must return either an array of numbers or a number. This function aims to filter the numbers after being translated. This function must ensure that no number is a composition of a power of ten, i.e. every number must be in the range `[0-9]` or be a base `10^x`.

If no `mapper` is given and there is no default mapper for the `locale` provided, then the identity function is used.

## License
MIT
