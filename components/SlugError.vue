<template>
  <div class="uk-text-center uk-flex uk-flex-middle uk-flex-center" uk-height-viewport="expand: true">
    <div>
      <h1 class="uk-heading-large">Oooops</h1>
      <div class="uk-text-large uk-text-danger">
        <p>{{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

</style>