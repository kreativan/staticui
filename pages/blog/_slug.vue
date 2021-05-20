<template>
  <article class="uk-article">
    <h1 class="uk-article-title uk-text-cente">{{ page.title }}</h1>
    <p class="uk-article-meta">{{ formatDate(page.createdAt) }}</p>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  layout: 'article',
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
      const page = await $content('blog', params.slug).fetch()
      return { page }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      let newDate = new Date(date).toLocaleDateString('en-US', options)
      return newDate
    },
  },
}
</script>

<style lang="less"></style>
