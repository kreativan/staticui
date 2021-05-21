<template>
  <div class="prev-next-article uk-flex uk-flex-between uk-link-heading">
    <div class="prev-article"> 
      <nuxt-link v-if='prevPage && prevPage.path' :to='prevPage.path'>{{ prevPage.title }}</nuxt-link>
    </div>
    <div class="next-article">
       <nuxt-link v-if='nextPage && nextPage.path' :to='nextPage.path'>{{ nextPage.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prevPage', 'nextPage'],
  created() {
    console.log(this.prevPage)
    console.log(this.nextPage)
  }
}
</script>

<style></style>
