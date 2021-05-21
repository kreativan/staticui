<template>
  <div class="prev-next-article uk-flex uk-flex-between uk-link-heading">
    <div class="prev-article"> 
      <nuxt-link v-if='prevPage' :to='prevLink'>{{ prevTitle }}</nuxt-link>
    </div>
    <div class="next-article">
       <nuxt-link v-if='nextPage' :to='nextLink'>{{ nextTitle }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['prevLink', 'prevTitle', 'nextLink', 'nextTitle', 'prevPage', 'nextPage']
}
</script>

<style></style>
