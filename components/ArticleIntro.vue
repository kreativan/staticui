<template>
  <article class="uk-article">
    <Picture :image='img' :sizes="sizes" />
    <h2 class="uk-article-title">{{ title }}</h2>
    <span class="uk-text-meta">{{ meta }}</span>
    <p>{{ text }}</p>
    <nuxt-link :to='href' class="uk-button uk-button-text">Read More</nuxt-link>
  </article>
</template>

<script>
export default {
  props: ['title', 'meta', 'text', 'href', 'img'],
  computed: {
    sizes() {
      return ['360', '480', '600']
    }
  }
}
</script>

<style>

</style>