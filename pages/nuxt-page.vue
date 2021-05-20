<template>
  <main id="main">
    <PageHeading :title='page.title' />
    <section class="uk-section">
      <div class="uk-container">
        <nuxt-content :document="page" />
      </div>
    </section>
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
      page: {}
    }
  },
  async fetch() {
    const page = await this.$content('nuxt-page').fetch()
    this.page = page;
  }
}
</script>

<style>

</style>