<template>
  <ul class="uk-breadcrumb">
    <li>
      <nuxt-link :to="'/'" class="title">
        Home
      </nuxt-link>
    </li>
    <li v-for="(item, i) in breadcrumbs" :key="i" class="item">
      <nuxt-link :to="item.to" class="title">
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['title'],
  computed: {
    breadcrumbs () {
      const pathArray = this.$route.path.split('/')
      let index = pathArray.length;
      if(pathArray[index] !== "") pathArray.pop()
      pathArray.shift()
      const breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          title: this.title
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
  }
}
</script>

<style lang="less">

</style>