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
