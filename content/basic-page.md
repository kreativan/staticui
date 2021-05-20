---
title: Basic Page
description: "Dynamic page routing with _slug"
---

Dynamic routing with `_slug.vue`.     
Any file in content folder will be automatically loaded, unless there is a specific page file for it in pages directory.     
Eg: `/content/basic-page.md` can be accesed by visiting `/basic-page/` url.     
If `/pages/basic-page.vue` does NOT exist, content will be rendered by `/pages/_slug.vue`    

```md[/content/basic-page.md]
---
title: Basic Page
description: "Dynamic page routing with _slug.vue"
---

Dynamic routing with `_slug.vue`.     
Any file in content folder will be automatically loaded, unless there is a specific page file for it in pages directory.     
Eg: `/content/basic-page.md` can be accesed by visiting `/basic-page/` url.     
If `/pages/basic-page.vue` does NOT exist, content will be rendered by `/pages/_slug.vue`   
```

```html[/pages/_slug.vue]
<template>
  <main id="main" class="uk-section">
    <div class="uk-container">
      
      <div class="uk-margin-medium-bottom">
        <h1 class="uk-heading-small">{{ page.title }}</h1>
        <Breadcrumb :title="page.title" />
      </div>

      <nuxt-content :document="page" />

    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: this.page.title,
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: this.page.description
        },
      ]
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content(params.slug).fetch()
      return { page }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  }
}
</script>

<style lang="less">

</style>
```