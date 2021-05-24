<template>
  <main id="main">

    <PageHeading :title="page.title" />

    <div class="uk-section">
      <div class="uk-container" uk-scrollspy="target: .uk-article; cls: uk-animation-slide-bottom-small; delay: 200">

        <nuxt-content :document="page" />

        <template v-for='(post, index) in postsArr'>
          <div :class="{'uk-margin-medium-top': index > 0}" :key='index'>
            <hr v-if='index > 0' class="uk-margin-medium" />
            <ArticleIntro :key='post.slug' :article='post' />
          </div>  
        </template>

        <div class="uk-margin-medium-top uk-text-muted uk-text-center">
          Showing {{ limit }} of {{ total }}
        </div>

        <div v-if='!end' class="uk-text-center uk-margin">
          <button @click="loadMore()" class="uk-button uk-button-primary uk-width-small">
            <span v-show='spinner' uk-spinner></span>
            <span v-show='!spinner'>More</span>
          </button>
        </div>

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
      postsArr: [],
      limit: 2, // number of pages to load initialy
      load: 2, // number of pages to load on click
      button: 'Load More',
      spinner: false,
      end: true,
      total: 0,
    }
  },
  async created() {
    const page = await this.$content('blog-page').fetch()
    this.page = page
  },
  async fetch() {

    const all = await this.$content('blog').fetch()
    this.total = all.length
    
    const posts = await this.$content('blog')
    .sortBy("createdAt", 'desc')
    .limit(this.limit)
    .fetch()

    this.postsArr = posts

    if(this.total > this.limit) this.end = false

  },
  methods: {
    async loadMore() {

      this.spinner = true;

      const posts = await this.$content('blog')
      .sortBy("createdAt", 'desc')
      .skip(this.limit)
      .limit(this.load)
      .fetch()

      this.spinner = false

      if(posts.length < 1) {
        this.end = true
        return
      }

      if(this.limit + posts.length === this.total) this.end = true

      this.postsArr = [...this.postsArr, ...posts]

      this.limit = this.limit + this.load

    }
  },
}
</script>

<style>

</style>