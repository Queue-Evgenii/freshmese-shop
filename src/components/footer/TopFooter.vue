<template>
  <div class="top-footer _flex _jcsb _flex-wrap _gap-35">
    <ColumnMenu v-for="column in menu" :key="column.id" :column="column" />
  </div>
</template>

<script>
import ColumnMenu from "@/components/footer/ColumnMenu.vue";
export default {
  name: "TopFooter",
  components: { ColumnMenu },
  props: {
    menu: {
      type: Array,
    },
  },
};
</script>

<style lang="stylus">
.top-footer{
	justify-content center
}
</style>
