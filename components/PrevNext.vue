<template>
  <div class="prev-next-article uk-flex uk-flex-between uk-link-heading">
    <div class="prev-article"> 
      <nuxt-link v-if='prevPage' :to='`/blog/${prevPage.slug}/`'>{{ prevPage.title }}</nuxt-link>
    </div>
    <div class="next-article">
       <nuxt-link v-if='nextPage' :to='`/blog/${nextPage.slug}/`'>{{ nextPage.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prevPage', 'nextPage'],
}
</script>

<style></style>
