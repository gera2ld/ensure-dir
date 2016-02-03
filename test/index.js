const ensureDir = require('..')

ensureDir('temp/a/b/c')
.then(() => console.log('ok'), err => console.error(err))

ensureDir(['temp/a/b/d', 'temp/e/f/g'])
.then(() => console.log('ok'), err => console.error(err))
