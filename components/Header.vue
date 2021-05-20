<template>
  <div id="header">
    <div class="uk-container">
      <div class="uk-navbar-container uk-navbar" uk-navbar>
        <div class="uk-navbar-left">
          <nuxt-link to="/" class="logo uk-flex uk-flex-middle uk-link-reset">
            <Logo class="uk-margin-small-right" />
            <div class="uk-h4 uk-margin-remove uk-text-uppercase uk-text-bold">
              Static <span>UI</span>
            </div>
          </nuxt-link>
        </div>
        <div class="uk-navbar-center">
          <Navbar />
        </div>
        <div class="uk-navbar-right">
          <SocialLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
#header {
  .logo svg {
    height: 40px;
    width: 40px;
  }
}
</style>