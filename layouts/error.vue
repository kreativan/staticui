<template>
  <main id="main" class="uk-section">
    <div class="uk-flex uk-flex-middle uk-flex-center" uk-height-viewport="expand: true">
      <div class="uk-text-center">
        <h1 v-if="error.statusCode === 404" class="uk-heading-medium">Page not found</h1>
        <h1 v-else class="uk-text-danger uk-heading-medium">An error occurred</h1>
        <nuxt-link to="/" class="uk-button uk-button-default uk-button-large uk-margin-medium-top">
          Home page
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'error' // you can set a custom layout for the error page
  }
</script>