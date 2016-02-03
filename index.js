const fs = require('fs')
const path = require('path')

const cache = {}

function exists(path) {
  return new Promise((resolve, reject) => {
    fs.access(path, err => err ? reject(err) : resolve())
  })
}

function mkdir(dir) {
  return ensureDir(path.dirname(dir))
  .then(() => new Promise((resolve, reject) =>
    fs.mkdir(dir, err => err ? reject(err) : resolve())
  ))
}

function ensureOne(dir) {
  dir = path.resolve(dir)
  var promise = cache[dir]
  if (!promise) {
    promise = cache[dir] = exists(dir)
    .catch(() => mkdir(dir))
    .then(() => {
      delete cache[dir]
    })
  }
  return promise
}

function ensureDir(dirs) {
  return Array.isArray(dirs)
    ? Promise.all(dirs.map(ensureOne))
    : ensureOne(dirs)
}

module.exports = ensureDir;
