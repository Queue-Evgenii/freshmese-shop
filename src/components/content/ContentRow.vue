<template>
  <div class="content-row">
    <aside class="sidebar">
      <SidebarDefault :title="title" :items="items" />
    </aside>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SidebarDefault from "@/components/sidebar/SidebarDefault";
export default {
  name: "ContentRow",
  components: { SidebarDefault },
  props: {
    items: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style lang="stylus"></style>
