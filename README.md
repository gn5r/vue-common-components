# vue-common-components

# 使い方

1. プロジェクトの.npmrc に registry を追記する

   - `echo registry=https://npm.pkg.github.com/gn5r >> .npmrc`

2. インストール

   - `npm i @gn5r/vue-common-components@beta`

3. main.js に下記を記述

   ```
     import components from "@gn5r/vue-common-components";
     import from "@gn5r/vue-common-components/css/style.scss"

     Vue.use(components);
   ```

# Components/common

## HeaderBar

## FooterBar

# Components/form

## CheckBox

## DatePicker

## RadioButton

## SelectBox

## TextField
