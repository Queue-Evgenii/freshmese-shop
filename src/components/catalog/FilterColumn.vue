<template>
  <aside class="content-catalog__filters filter-columns _f-dir-col">
    <div
      @click="changeStatus()"
      ref="filtersTitle"
      class="filter-columns__title _grand-title"
    >
      Filter
    </div>
    <div ref="filters" class="visible-block filter-columns _flex _f-dir-col">
      <CategoriesList :categories="categories" />
      <BrandsList :brands="brands" />
      <RatingList />
      <RangeFilter />
      <div class="filter-columns__actions _flex _aic">
        <GreenButton label="Apply" />
        <GreyButton label="Reset" />
      </div>
    </div>
  </aside>
</template>

<script>
import CategoriesList from "@/components/catalog/filters/CategoriesList.vue";
import BrandsList from "@/components/catalog/filters/BrandsList.vue";
import RatingList from "@/components/catalog/filters/RatingList.vue";
import RangeFilter from "@/components/catalog/filters/RangeFilter.vue";
import GreenButton from "@/components/content/forms/GreenButton.vue";
import GreyButton from "@/components/content/forms/GreyButton.vue";

export default {
  name: "FilterColumn",
  components: {
    GreyButton,
    GreenButton,
    RangeFilter,
    RatingList,
    BrandsList,
    CategoriesList,
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
    brands: {
      type: Array,
    },
  },
  methods: {
    changeStatus() {
      this.$refs.filters.classList.toggle("active");
      this.$refs.filters.parentElement.classList.toggle("active");
      this.$refs.filtersTitle.classList.toggle("active");
    },
  },
};
</script>

<style lang="stylus">
.filter-columns{
	display: flex;
	row-gap: 48px;
	flex: 0 0 220px;
	@media(max-width: 768px){
		gap: 0;
		flex: none;
		&.active{
			row-gap: 48px;
			flex: 0 0 220px;
		}
	}
	&__actions{
		gap: 32px;
	}
	&__title{
		display: none
		&::after{
			content: '';
			height: 24px;
			width: 12px;
			background: url("/src/assets/img/icons/arrow.png") center no-repeat;
			background-size: contain;
			transform: rotate(90deg);
			transition: transform 0.3s ease 0s;
		}
		&.active{
			&::after{
				transform: rotate(-90deg);
			}
		}
		@media(max-width: 768px) {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
}
@media(max-width: 768px) {
	.visible-block {
		transform: translate(0, -500%);
		height: 0;
		overflow: hidden;
		visibility: hidden;
		transition: all 0.3s ease 0s;
		&.active{
			transform: translate(0, 0);
			height: initial;
			overflow: visible;
			visibility: visible;
		}
	}
}
._list {
	row-gap: 16px;
}
._list-items{
	row-gap: 12px;
}
._list-item{
	column-gap: 12px;
}
</style>
