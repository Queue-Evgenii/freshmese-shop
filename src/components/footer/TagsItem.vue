<template>
  <li class="footer-content__item">
    <router-link :to="item.url">
      {{ item.name }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "TagsItem",
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style lang="stylus"></style>
