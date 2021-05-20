---
title: Nuxt Page
description: "Empower your NuxtJS application with @nuxt/content module: write
  in a content/ directory and fetch your Markdown, JSON, YAML and CSV files
  through a MongoDB like API, acting as a Git-based Headless CMS."
---

Empower your NuxtJS application with `@nuxtjs/content` module: write in a `content/` directory and fetch your Markdown, JSON, YAML and CSV files through a MongoDB like API, acting as a **Git-based Headless CMS**.

## Writing content

Learn how to write your `content/`, supporting Markdown, YAML, CSV and JSON: https://content.nuxtjs.org/writing.

## Fetching content

Learn how to fetch your content with `$content`: https://content.nuxtjs.org/fetching.

## Displaying content

Learn how to display your Markdown content with the `<nuxt-content>` component directly in your template: https://content.nuxtjs.org/displaying.


<div class="uk-heading-line uk-text-muted uk-text-center uk-text-small uk-margin-medium"><span>markdown</span></div>   

### **Vue Components**
```html
<my-component></my-component>

<!-- eg -->
<logo></logo>
<social-links></social-links>
```
<div class="uk-flex uk-flex-middle uk-margin">
  <div><logo :width="32" :height="32"></logo></div>
  <social-links></social-links>
</div>

### **Codeblocks**

```js{1,3-5}[server.js]
const http = require('http')
const bodyParser = require('body-parser')

http.createServer((req, res) => {
  bodyParser.parse(req, (error, body) => {
    res.end(body)
  })
}).listen(3000)
```

### **Footnotes**

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

     Add as many paragraphs as you like. 