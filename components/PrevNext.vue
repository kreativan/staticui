<template>
  <div class="prev-next-article uk-flex uk-flex-between uk-link-heading">
    <div class="prev-article"> 
      <template v-if='prevLink'>
        <nuxt-link :to='prevLink'>{{ prevTitle }}</nuxt-link>
      </template>
    </div>
    <div class="next-article">
      <template v-if='nextLink'>
        <nuxt-link :to='nextLink'>{{ nextTitle }}</nuxt-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prevLink', 'prevTitle', 'nextLink', 'nextTitle',],
  
}
</script>

<style></style>
