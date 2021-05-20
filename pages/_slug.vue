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