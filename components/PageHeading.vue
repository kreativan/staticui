<template>
  <div id="page-heading" class="uk-section uk-background-muted">
    <div class="uk-container uk-text-center">
      <h1 class="uk-heading-small">{{ title }}</h1>
      <Breadcrumb :title="title" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style></style>
