<template>
  <main id="main">
    <PageHeading :title="page.title" />
    <div class="uk-section">
      <div class="uk-container">
        <nuxt-content :document="page" />
        <template v-for='(post, index) in posts'>
          <hr v-if='index > 0' class="uk-margin-medium" :key='index' />
          <ArticleIntro :key='post.slug' :article='post' :index='index'  />
        </template>
      </div>
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
          content: 'static ui blog' 
        },
      ],
    }
  },
  data() {
    return {
      page: {},
      posts: []
    }
  },
  async created() {
    const page = await this.$content('blog-page').fetch()
    this.page = page
  },
  async fetch() {
    const posts = await this.$content('blog')
    .sortBy("createdAt", 'desc')
    .fetch()
    this.posts = posts
  },
}
</script>

<style>

</style>