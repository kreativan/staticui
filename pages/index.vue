<template>
  <div class="uk-container">
    <div class="uk-section uk-flex uk-flex-middle uk-flex-center uk-text-center" uk-height-viewport="expand: true">
      <div>
        <Logo />
        <h1 class="uk-heading-large">
          Static UI
        </h1>
        <div class="uk-margin-medium-top uk-flex uk-flex-center">
          <a href="https://nuxtjs.org" 
            class="uk-button uk-button-default uk-button-large uk-margin-right"
            target="_blank" 
            rel="nofollow noopener"
            title="Nuxt.js"
          >
            Nuxt.js
          </a>
          <a href="https://vuejs.org/" 
            class="uk-button uk-button-default uk-button-large uk-margin-right"
            target="_blank" 
            rel="nofollow noopener"
            title="Nuxt.js"
          >
            Vue.js
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Static UI",
      meta: [
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Kreativan blueprint for building static websites using nuxt.js and uikit framework' 
        },
      ],
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ],
    };
  }
}
</script>

<style lang="less">

</style>
