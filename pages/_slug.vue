<template>
  <div class="uk-container">
    <h1 class="uk-heading-small uk-text-center">{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </div>
</template>

<script>
export default {
  layout: 'basic',
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.description,
        },
      ],
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const page = await $content(params.slug).fetch()
      return { page }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
}
</script>

<style lang="less"></style>
