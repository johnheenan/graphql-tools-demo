# graphql-tools-demo
As per request, reproduction of issue with version 7 of @graphql-tools/load and @graphql-tools/graphql-file-loader

Please see https://github.com/ardatan/graphql-tools/issues/3447

## To reproduce issue:
```
yarn
yarn start # no problem
yarn build
.\dist\graphql-tools-demo-win.exe # error reported as in issue
```

## To fix issue by downgrade of tools:
```
yarn add @graphql-tools/graphql-file-loader@^6 @graphql-tools/load@^6
yarn build
.\dist\graphql-tools-demo-win.exe # No error
```
