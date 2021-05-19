<template>
  <ul class="uk-navbar-nav">
    <template v-for='(item, index) in menu'>
      <li :class="{ 'uk-active': $route.name == item.name }" :key='index'>
        <nuxt-link :to='item.href'>
          {{ item.title }}
        </nuxt-link>
      </li>
    </template>
  </ul>
</template>

<script>
export default {  
  data() {
    return {
      menu: [
        {
          title: 'Home',
          name: 'index',
          href: '/',
          active: this.$route.name === 'home' ? true :false
        },
        {
          title: 'Basic Page',
          name: 'basic-page',
          href: '/basic-page/',
          active: this.$route.name === 'basic-page' ? true :false
        },
        {
          title: 'Blog',
          name: 'blog',
          href: '/blog/',
          active: this.$route.name === 'blog' ? true :false
        },
      ]
    }
  }
}
</script>

<style>

</style>