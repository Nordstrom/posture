#!/usr/bin/env node

import program from 'commander'
import fs from 'fs'
import chalk from 'chalk'
import _ from 'lodash'
import lintObject from './lint'
import { getRequirements } from './requirements'
import { buildMessage } from './messages'
import mapLines from './mapLines'
import errors from './errors'
import warnings from './warnings'
import optimizations from './optimizations'

program
    .version(require('../package.json').version)
    .option('-s, --swagger [swagger]', 'path to swagger file if not in root directory')
    .parse(process.argv)

try {
  const messages = { errors, warnings, optimizations }
  var file = program.swagger ? program.swagger : './swagger.json'
  const swagger = fs.readFileSync(file, 'utf8')
  const obj = JSON.parse(swagger)
  const lineMap = mapLines(swagger)
  const requirements = getRequirements(messages, obj)
  const results = lintObject(obj, requirements)
  if (_.keys(results).length) {
    for (let severity in results) {
      results[severity].forEach((result) => {
        var message = buildMessage(severity, result, lineMap, messages)
        if (message) { console.log(message) }
      })
    }
  } else {
    console.log(`${chalk.bgGreen.white(' SUCCESS ')} ${chalk.green('Your documentation conforms to recommended practices.')}`)
  }
} catch (err) {
  console.log(err)
}
