<template>
  <div class="menu-column">
    <div class="menu-column__title _title">{{ column.name }}</div>
    <ul class="menu-column__items">
      <MenuItem v-for="item in column.items" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import MenuItem from "@/components/footer/MenuItem.vue";
export default {
  name: "ColumnMenu",
  components: { MenuItem },
  props: {
    column: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.menu-column{
	flex: 1 0 150px;
	&__title{
		padding-bottom: 16px;
	}
}
</style>
