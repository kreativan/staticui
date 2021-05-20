<template>
  <ul class="uk-breadcrumb">
    <li>
      <nuxt-link :to="'/'" class="title">
        Home
      </nuxt-link>
    </li>
    <li v-for="(item, index) in breadcrumbs" :key="index">
      <nuxt-link :to="item.path" :title='item.title'>
        {{ item.title }}
      </nuxt-link>
    </li>
    <li v-if='title'>
     <span>{{ title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['title', 'align'],
  methods: {
    async getPageData(slug, parent = '') {
      const data = (parent != '') ? `${parent}, ${slug}` : slug
      const page = await this.$content(data)
      .only(['title', 'path'])
      .fetch()
      console.log(page)
      return page
    }
  },
  computed: {
    breadcrumbs () {
      const crumbs = [];
      const pathArray = this.$route.path.split('/')
      const cleanArray = pathArray.filter(key => key != '')

      let path = ''
      let title = ''

      cleanArray.forEach((param, index) => {
        path = `${path}/${param}`
        title = param.replace(/-/g, ' ');
        title = param[0].toUpperCase() + title.substring(1);
        crumbs.push({title: title, path: path + "/"})
      })

      if(this.title) crumbs.pop()

      return crumbs
    },
  }
}
</script>

<style lang="less">

</style>