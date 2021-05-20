<template>
  <main id="main" class="uk-section">
    <div class="uk-container">

      <SlugError v-if='error' :error='error' />
      
      <div v-if='!error' class="uk-margin-medium-bottom">
        <h1 class="uk-heading-small">{{ headline }}</h1>
        <Breadcrumb :title="headline" />
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
  data() {
    return {
      slug: this.$route.params.slug,
      error: '',
      page: {}
    }
  },
  computed: {
    headline() {
      return this.page.title ? this.page.title : this.slug
    }
  },
  async fetch() {
    try {
      const page = await this.$content(this.slug).fetch()
      this.page = page; 
    } catch (error) {
      console.log(error);
      this.error = `/content/${this.slug}.md not found`;
    }
  }
}
</script>

<style lang="less">

</style>