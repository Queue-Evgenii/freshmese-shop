<template>
  <router-link :to="item.url" class="menu-item _label-item">{{
    item.name
  }}</router-link>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.menu-item{
	display: block;
	&:not(:last-child) {
		padding-bottom: 16px;
	}
	&:hover{
		text-decoration: underline;
	}
}
</style>
