<template>
  <main id="main">
    <div id="page-heading" class="uk-section uk-background-muted">
      <div class="uk-container">
        <h1 class="uk-heading-small">{{ page.title }}</h1>
        <Breadcrumb :title="page.title" />
      </div>
    </div>
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