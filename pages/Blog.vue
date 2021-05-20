<template>
  <main id="main">
    <PageHeading :title="page.title" />
    <div class="uk-section">
      <div class="uk-container">
        <nuxt-content :document="page" />
        <ul class="uk-list uk-list-divider uk-list-large">
          <li v-for='post in posts' :key="post.slug">
            <ArticleIntro 
              :img='post.image'
              :title='post.title' 
              :text='post.intro' 
              :href='post.path'
              :meta='meta(post.createdAt, post.updatedAt)'
            />
          </li>
        </ul>
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

    console.log(posts);

    this.posts = posts
  },
  methods: {
    meta(createdDate, updatedDate) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      let created = new Date(createdDate).toLocaleDateString('en-US', options)
      let updated = new Date(updatedDate).toLocaleDateString('en-US', options)
      return `Created on: ${created}, modified: ${updated}`
    }
  }
}
</script>

<style>

</style>