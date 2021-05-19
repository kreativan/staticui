<template>
  <main id="main" class="uk-section">
    <div class="uk-container">
      <div>
        <h1 class="uk-heading-small">{{ page.title }}</h1>
        <Breadcrumb :title="page.title" />
      </div>
      <hr class="uk-margin-medium" />
      <nuxt-content :document="page" />
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      page: {}
    }
  },
  async fetch() {
    const page = await this.$content('basic-page').fetch()
    this.page = page;
  }
}
</script>

<style>

</style>