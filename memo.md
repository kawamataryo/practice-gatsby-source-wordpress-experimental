# installまで

- WPGatsbyの追加

https://github.com/TylerBarnes/using-gatsby-source-wordpress-experimental/tree/master/WordPress/plugins
zipを落としてinstallする

- WPGraphQLの追加
https://github.com/wp-graphql/wp-graphql
zipでinstallする

# imageがfetchできない
https://github.com/gatsbyjs/gatsby-source-wordpress-experimental/issues/53
できた

# URLのDecord
日本語URLを使うときはページ生成時にdecordが必要

# Gatsby-imageを使う
wordpress-experimentalがremote_fileに対応していた。神。
そのままgatsby-imageの形式で渡せた。

# TypeScript化
gatsby-plugin-typescriptは不要で動く?

> This plugin is automatically included in Gatsby.

tsxに変えるだけで良い。

エディタに色々認識させるために、tsconfig.jsonは追加する

```
npx typescript --init
```

設定はお好みで。

サンプルリポジトリでは、https://github.com/gatsbyjs/gatsby/blob/master/examples/using-typescript/tsconfig.json

を参考にしている

そして、@typesを追加する。

```
yarn add -D @types/node @types/react @types/react-dom
```

GraphQLの型を自動生成する

```
yarn add -D typescript gatsby-plugin-graphql-codegen
```

```
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./gatsby-graphql.ts`,
          documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
          './gatsby-node.ts',
        ],
      }
    }
```

# 参考サイト
https://gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9

# ESLintの設定

```
 @typescript-eslint/eslint-plugin @typescript-eslint/parser
```


