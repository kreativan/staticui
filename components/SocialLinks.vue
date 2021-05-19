<template>
  <ul class="social-links uk-subnav uk-margin-remove">
    <li v-for='(link, index) in links' :key='index'>
      <a :href="link.href" target="_blank" rel="nofollow noopener">
        <i :uk-icon='`icon: ${link.icon}; ratio: 1.3`'></i>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          icon: "twitter",
          href: "https://twitter.com/lokomotivan"
        },
        {
          icon: "github",
          href: "https://github.com/kreativan"
        }
      ]
    }
  }
}
</script>

<style>

</style>