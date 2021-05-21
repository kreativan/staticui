<template>
  <div class="prev-next-article uk-flex uk-flex-between uk-link-heading">
    <div class="prev-article">
      <nuxt-link v-if="prev && prev.path" :to="prev.path + '/'" :title='prev.title'>
        <i uk-icon="arrow-left"></i>
        {{ prev.title }}
      </nuxt-link>
    </div>
    <div class="next-article">
      <nuxt-link v-if="next && prev.path" :to="next.path + '/'" :title='next.title'>
        {{ next.title }}
        <i uk-icon="arrow-right"></i>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: Object,
    next: Object
  }
}
</script>

<style></style>
