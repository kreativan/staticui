<template>
  <article class="uk-article uk-grid uk-flex-middle" uk-grid>
    <div v-if='image' class="uk-width-1-2@m">
      <nuxt-link :to='article.path + "/"' :title="article.title">
        <img :srcSet="image.srcSet" :src="image.src" />
      </nuxt-link>
    </div>
    <div class="uk-width-expand@m">
      <h2 class="uk-article-title">
        <nuxt-link :to='article.path + "/"' :title="article.title" class="uk-link-heading">
          {{ article.title }}
          </nuxt-link>
      </h2>
      <span class="uk-text-meta">{{ meta }}</span>
      <p>{{ article.intro }}</p>
      <nuxt-link :to='article.path + "/"' class="uk-button uk-button-text">
        Read More
      </nuxt-link>
    </div>
  </article>
</template>

<script>
export default {
  props: ['article', 'index'],
  computed: {
    meta() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      let created = new Date(this.article.createdAt).toLocaleDateString('en-US', options)
      let updated = new Date(this.article.updatedAt).toLocaleDateString('en-US', options)
      return `Created on: ${created}, modified: ${updated}`
    },
    image() {
      try {
        const img = require(`../assets/images/${this.article.image}?resize&sizes[]=580&sizes[]=960&sizes[]=420&format=webp`); 
        return img 
      } catch (error) {
        return false
      }
    },
  }
}
</script>

<style>

</style>