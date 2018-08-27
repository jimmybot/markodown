#!/usr/bin/env node
'use strict';

require('marko/node-require')
const fs = require('fs')

const files = [
    // stub: for now you have to specify all files you want to compile
    'index',
]

function build(file) {
    const template = require(`./src/marko/${file}.marko`)
    const out = fs.createWriteStream(`./dst/html/${file}.html`, { encoding: 'utf8' })
    template.render({}, out)
}

function buildAll(files) {
    files.forEach(file => build(file))
}

buildAll(files)

console.log(`Compiled ${files.length} files from marko to html`)
