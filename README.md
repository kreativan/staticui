# static-ui

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## UIkit
Update package.json
```
# add uikit to dependencies
"dependencies": {
	"uikit": "^3.6.21"
}

# add less and less-loader to devDependencies
"devDependencies": {
	"less": "^3.13.1",
  "less-loader": "^5.0.0",
}
```

Create `uikit.js` file: `/plugins/uikit.js`
```
import Vue from 'vue'

import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)

// use it inside vue files as this.$uikit
Vue.prototype.$uikit = UIkit
```

Create `main.less` file: `assets/less/main.less`
```
// import default uikit theme
@import "../../node_modules/uikit/src/less/uikit.theme.less";
```

Update nuxt config `nuxt.config.js`
```
// Main Less file
css: [
  '~/assets/less/main',
],

// add uikit.js as plugin
plugins: [
	{ src: '~/plugins/uikit', ssr: false }
],
```

Run npm install
```
npm install
```

Use uikit in vue files like `this.$uikit`
```
methods: {
  notification() {
     this.$uikit.notification('My message');
  }
}
```