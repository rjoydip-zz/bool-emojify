# BoolEmojify [![Build Status](https://travis-ci.org/rjoydip/bool-emojify.svg?branch=master)](https://travis-ci.org/rjoydip/bool-emojify)

> Emojify boolean values

## Install

```bash
    npm i bool-emojify
```

## Option

```js
{
    "truthy": '👆',
    "falsy": '👇'
}
```

## Usage

```js
const { BoolEmojify } = require('bool-emojify');

const BoolEmojify = new BoolEmojify();
const firstEmojify = BoolEmojify.emojify(true, (result) => {
    /* TODO: result.value */
});
const secondEmojify = BoolEmojify.emojify(false); // secondEmojify.value
```

## API

### emojify(data, [cb])

#### data

Type: `Boolean`

Data boolean value for emojify.

#### cb

Type: `Callback`

Return boolean emojify value in callback.

## License

MIT © [Joydip Roy (rjoydip)](https://github.com/rjoydip/array-emojify/blob/master/license.md)
