ensure-dir
===

![NPM](https://img.shields.io/npm/v/ensure-dir.svg)
![License](https://img.shields.io/npm/l/ensure-dir.svg)
![Downloads](https://img.shields.io/npm/dt/ensure-dir.svg)

Installation
---
``` sh
$ npm install ensure-dir
```

Usage
---
``` javascript
const ensureDir = require('ensure-dir')

ensureDir('a/b/c').then(() => {
  // doStuff
})

ensureDir(['a/b/c', 'a/b/d', 'e/f/g']).then(() => {
  // doStuff
})
```
