<template>
  <aside class="sidebar-wrapper sidebar">
    <div class="menu-item-name">{{ title }}</div>
    <ul class="list">
      <SidebarMenuItem v-for="item in items" :key="item.id" :item="item" />
    </ul>
    <div class="more-wrapper">
      <router-link to="/categories" class="more">More categories</router-link>
    </div>
  </aside>
</template>

<script>
import SidebarMenuItem from "@/components/sidebar/SidebarMenuItem.vue";
export default {
  name: "SidebarDefault",
  components: { SidebarMenuItem },
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

<style lang="stylus">
.sidebar-menu-wrapper {
	padding: 20px 0;
}
.menu-item-name {
	color: #151515;
	font-size: 18px;
	line-height: 27px;
	margin-bottom: 15px;
	font-weight: 600;
}
.list {
	margin-bottom: 38px;
}
.list .menu-list-item {
	margin-bottom: 12px;
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
}
.list .menu-list-item:last-child {
	margin-bottom: 0;
}
.list .menu-list-item a {
	text-decoration: underline;
	color: #6A983C;
}
.more-wrapper {
	padding: 15px;
	background: #f5f5f5;
	max-width: 180px;
	border-radius: 12px;
}
.more-wrapper a {
	font-style: normal;
	font-size: 15px;
	line-height: 22px;
	font-weight: 700;
	color: #151515;
	display: block;
	background: url("@/assets/img/icons/arrow.png") no-repeat 130px 6px;
}
</style>
