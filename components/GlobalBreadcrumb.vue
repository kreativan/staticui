<template>
  <div id="global-breadcrumb">
    <div class="uk-container">
      <Breadcrumb :title="title" />
    </div>
  </div>
</template>

<script>
export default {
  props:['title', 'align']
}
</script>

<style>

</style>