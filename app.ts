//see README

import path = require('path')
import fs = require('fs')
import process = require('process')
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'


function loadfilepath(filepath) {
  console.log('\n\n***************************************************************')
  console.log(`node working direcectory is ${process.cwd()}`)
  console.log(`js module directory name is ${__dirname}`)
  console.log(`filepath is ${filepath}`)
  console.log(`filepath is ${path.isAbsolute(filepath) ? 'absolute': 'relative'}`)

  if (!fs.existsSync(filepath)) {
    console.log('Not proceeding as filepath DOES NOT EXIST')
    return
  }
  console.log('filepath EXISTS')
  try {
    const contents = fs.readFileSync(filepath, 'utf8')
    console.log('contents of file: ', filepath)
    console.log(contents);
    let schema = loadSchemaSync(filepath, {
      loaders: [
        new GraphQLFileLoader(),
      ]
    });
    console.log('schema information for file ', filepath)
    console.log('the schema type of Book is ', schema.getType('Book'))
  } catch (e) {
    console.log('loadSchemaSync error for file ', filepath)
    console.error(e)
  }
}

//relative file paths
//console.log('**** Depending on where started from, some tests are expected to fail (hence a failure results for some tests is a test success). ****')
//loadfilepath('./graphql/schema.graphql')
//loadfilepath('../graphql/schema.graphql')
//absolute real filesystem with yarn start or for pkg snapshot read only file system in .dist, if resolveGlobsSync not calld
loadfilepath(path.posix.join(__dirname, './graphql/schema.graphql'))
//console.log('**** Depending on where started from, some tests are expected to fail (hence a failure results for some tests is a test success). ****')

