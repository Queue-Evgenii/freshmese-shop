<template>
  <aside class="sidebar-wrapper">
    <sidebar-menu-item />
    <sidebar-menu-item />
    <sidebar-menu-item />
  </aside>
</template>

<script>
import SidebarMenuItem from "@/components/sidebar/SidebarMenuItem.vue";
export default {
  name: "SidebarDefault",
  components: { SidebarMenuItem },
};
</script>

<style lang="stylus">
.sidebar-wrapper {
  padding: 60px 0;
}
</style>
