<template>
  <div class="footer-content">
    <div class="footer-content__title _title">Product tags</div>
    <ul v-if="menu" class="footer-content__list _flex _flex-wrap">
      <TagsItem v-for="item in menu" :key="item.id" :item="item" />
    </ul>
  </div>
</template>

<script>
import TagsItem from "@/components/footer/TagsItem.vue";
export default {
  name: "ContentFooter",
  components: { TagsItem },
  props: {
    menu: {
      type: Array,
    },
  },
};
</script>

<style lang="stylus">
.footer-content{
	&__list{
		gap: 16px;
		padding: 16px 0;
	}
	&__item{
		padding: 4px 10px;
		border-radius: 12px;
		background-color: #F5F5F5;
	}
}
</style>
