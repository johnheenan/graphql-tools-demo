import path = require('path')
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

  let schema1 = loadSchemaSync(path.normalize(path.join(__dirname, './graphql/schema.graphql')), {
    loaders: [
      new GraphQLFileLoader(),
    ]
  });

console.log(schema1)
//see README

