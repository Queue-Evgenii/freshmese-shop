<template>
  <div class="catalog__direction direction-menu _flex _f-dir-col">
    <div
      @click="changeDirection('grid')"
      class="direction-menu__grid _flex _aic"
    >
      <img src="@/assets/img/icons/grid-layout.svg" alt="" />Grid view
    </div>
    <div
      @click="changeDirection('rows')"
      class="direction-menu__list _flex _aic"
    >
      <img src="@/assets/img/icons/list-layout.svg" alt="" />List view
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsDirection",
  methods: {
    changeDirection(val) {
      const list = document.querySelector(".product-wrapper");
      if (val === "rows") {
        list.classList.add("row-direction");
        return;
      }
      list.classList.remove("row-direction");
    },
  },
};
</script>

<style lang="stylus">
.direction-menu{
	row-gap: 12px;
	justify-content: center;
	&__grid, &__list{
		font-size: 16px;
		column-gap: 8px;
		cursor: pointer;
		img{
			width: 20px;
			height: 20px;
		}
	}
	&__grid{
	}
	&__grid.active{
		img{}
	}
}
</style>
