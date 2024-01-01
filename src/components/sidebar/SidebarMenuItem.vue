<template>
  <li class="menu-list-item">
    <router-link :to="{ name: 'catalog', params: { name: item.url } }">{{
      item.name
    }}</router-link>
  </li>
</template>

<script>
export default {
  name: "SidebarMenuItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus"></style>
