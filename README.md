# graphql-tools-demo
As per request, reproduction of issue with version 7 of @graphql-tools/load and @graphql-tools/graphql-file-loader

Please see https://github.com/ardatan/graphql-tools/issues/3447

## To reproduce issue:
```
git clone https://github.com/johnheenan/graphql-tools-demo.git
cd graphql-tools-demo
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

## To fix issue using a fork of graphql-tools version 7
Fork is at https://github.com/johnheenan/graphql-tools

To build @graphql-tools/graphql-file-loader and package the module

```
git clone https://github.com/johnheenan/graphql-tools
cd graphql-tools
yarn
yarn build
cd packages\loaders\graphql-file
yarn pack # copy the contents of directory, not including test directory, to another one as below
```

Go back to graphql-tools-demo and place copy of contents of `packages\loaders\graphql-file` directory above in a directory below, such as `graphql-tools-graphql-file-loader-pkg-7.1.0`

```
yarn upgrade -L # to upgrade again to version 7
yarn remove @graphql-tools/graphql-file-loader
cd graphql-tools-graphql-file-loader-pkg-7.2.0 # the contents of directory built above without the test directory
yarn link
cd ..
yarn link @graphql-tools/graphql-file-loader
yarn add @graphql-tools/graphql-file-loader
yarn build
.\dist\graphql-tools-demo-win.exe # No error

```