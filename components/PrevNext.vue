<template>
  <div class="prev-next-article uk-flex uk-flex-between uk-link-heading">
    <div class="prev-article"> 
      <nuxt-link v-if='prev' :to='`/${root}/${prev.slug}/`'>
        <i uk-icon="arrow-left"></i>
        {{ prev.title }}
      </nuxt-link >
    </div>
    <div class="next-article">
      <nuxt-link v-if='next' :to='`/${root}/${next.slug}/`'>
        {{ next.title }}
        <i uk-icon="arrow-right"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['root', 'prev', 'next'],
}
</script>

<style></style>
