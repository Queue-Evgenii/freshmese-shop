<template>
  <layout-default>
    <main class="catalog">
      <div class="catalog__container _container">
        <div class="catalog__title _grand-title">Fruit and vegetables</div>
        <div class="catalog__actions actions-catalog _grid">
          <FiltersRow
            :currentCategory="currentCategory"
            @sortProductsByTags="sortProductsByTags"
          />
          <ProductsDirection />
          <SelectedFiltersList />
        </div>
        <div class="catalog__content content-catalog _flex _gap-35">
          <FilterColumn
            :categories="categories.slice(0, 10)"
            :brands="brands"
          />
          <ProductsList :products="products" />
        </div>
        <CatalogPagination />
      </div>
    </main>
  </layout-default>
</template>

<script>
import ProductsDirection from "@/components/catalog/ProductsDirection.vue";
import FiltersRow from "@/components/catalog/FiltersRow.vue";
import SelectedFiltersList from "@/components/catalog/SelectedFiltersList.vue";
import FilterColumn from "@/components/catalog/FilterColumn.vue";
import ProductsList from "@/components/catalog/ProductsList.vue";
import CatalogPagination from "@/components/catalog/CatalogPagination.vue";
export default {
  name: "CatalogView",
  components: {
    CatalogPagination,
    ProductsList,
    FilterColumn,
    SelectedFiltersList,
    FiltersRow,
    ProductsDirection,
  },
  data() {
    return {
      products: [],
      categories: [],
      brands: [],
    };
  },
  computed: {
    currentCategory() {
      return this.$route.params.name;
    },
  },
  methods: {
    getProducts() {
      this.$store.dispatch("getCategories").then((data) => {
        this.categories = data;
        const el = data.find((item) => item.url === this.currentCategory);
        this.products = el.products;
      });
    },
    getBrands() {
      this.$store.dispatch("getBrands").then((data) => {
        this.brands = data;
      });
    },
    sortProductsByTags(key) {
      console.log(key);
    },
  },
  mounted() {
    this.getProducts();
    this.getBrands();
  },
  watch: {
    currentCategory() {
      this.getProducts();
    },
  },
};
</script>

<style lang="stylus">
.catalog__title{ padding: 24px 0 16px; }
.actions-catalog {
	padding: 16px 0;
	column-gap: 32px;
	row-gap: 16px;
	grid-template-columns: 1fr max-content;
}
.content-catalog{
	padding: 48px 0;
	.filter-columns{
	}
	.products-list{
		flex: 1 1 100%;
	}
	@media(max-width: 768px) {
		flex-direction: column;
	}
}
</style>
