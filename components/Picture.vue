<template>
  <picture>
    <!--
    <template v-for='(item, index) in sources'>
      <source :media="item.media" :srcSet="item.src" :key='index' type="image/webp" />
    </template>
    -->
    <img :srcSet="multiple.srcSet" :src="multiple.src" />
  </picture>
</template>

<script>
export default {
  props: ['image', 'sizes'],
  computed: {
    sources() {
      const myarray = []; 

      const arr = [
        {
          media: '(max-width: 1000px)',
          src: require(`../assets/images/${this.image}?resize&sizes[]=300&sizes[]=600&format=webp`)
        },
      ]
      return arr

    },
    picture() {
      return require(`../assets/images/${this.image}`)
    },
    webp() {
      return require(`../assets/images/${this.image}?webp`) 
    },
    multiple() {
      const multipleSizes = require(`../assets/images/${this.image}?resize&sizes[]=300&sizes[]=600&sizes[]=1000&format=webp`);
      return multipleSizes
    }
  }
}
</script>

<style>

</style>