<template>
  <article class="uk-article">
    <h1 class="uk-article-title uk-text-center">{{ page.title }}</h1>
    <p class="uk-article-meta uk-text-center">
      {{ meta }}
    </p>
    <img v-if="image" :srcSet="image.srcSet" :src="image.src" class="uk-margin-bottom" />
    <nuxt-content :document="page" />
    <template>
      <hr class="uk-margin-medium" />
      <PrevNext 
        :root='root'
        :prev='prev'
        :next='next'
      />
    </template>
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
      const page = await $content(`blog`, params.article).fetch()
      const [prev, next] = await $content('blog')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.article, { before: 1, after: 1})
      .fetch()
      return { page, prev, next, root: 'blog' }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  computed: {
    meta() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      let created = new Date(this.page.createdAt).toLocaleDateString('en-US', options)
      let updated = new Date(this.page.updatedAt).toLocaleDateString('en-US', options)
      return `Created on: ${created}, modified: ${updated}`
    },
    image() {
      try {
        const img = require(`~/assets/images/${this.page.image}?resize&sizes[]=900&sizes[]=600&sizes[]=400&format=webp`); 
        return img
      } catch (error) {
        return false;
      }
    }
  },
}
</script>

<style lang="less"></style>
