<template>
  <layout-default>
    <main class="home">
      <div class="_container">
        <ContentRow :title="titleForCategories" :items="categories.slice(0, 6)">
          <div class="banner _flex">
            <BannerComponent />
            <BannerComponent />
          </div>
        </ContentRow>
        <ContentRow
          :title="titleForBestSellers"
          :items="bestSellers.slice(0, 6)"
        >
          <ProductWrapper :products="bestSellerProducts.slice(0, 3)" />
        </ContentRow>
        <ContentRow
          :title="titleForFromFarmers"
          :items="fromFarmers.slice(0, 6)"
        >
          <ProductWrapper :products="fromFarmersProducts.slice(0, 3)" />
        </ContentRow>
      </div>
      <ReviewsSlider />
      <div class="_container">
        <div class="products-section">
          <ProductWrapper :products="products.slice(0, 4)" />
        </div>
        <HomeBlog />
      </div>
    </main>
  </layout-default>
</template>

<script>
import ContentRow from "@/components/content/ContentRow.vue";
import ProductWrapper from "@/components/content/ProductWrapper.vue";
import BannerComponent from "@/components/home/BannerComponent.vue";
import ReviewsSlider from "@/components/home/ReviewsSlider.vue";
import HomeBlog from "@/components/home/HomeBlog.vue";
export default {
  name: "HomeView",
  components: {
    ContentRow,
    ProductWrapper,
    BannerComponent,
    ReviewsSlider,
    HomeBlog,
  },
  data() {
    return {
      products: [],
      bestSellerProducts: [],
      fromFarmersProducts: [],
      categories: [],
      bestSellers: [],
      fromFarmers: [],
      titleForCategories: "Category menu",
      titleForBestSellers: "Best selling products",
      titleForFromFarmers: "Best from Farmers",
    };
  },
  methods: {
    getCategories() {
      this.$store
        .dispatch("getCategories")
        .then((res) => {
          this.categories = res;
          this.bestSellers = res.filter((item) => item.best_seller);
          this.fromFarmers = res.filter((item) => item.from_farmers);
          const data = [];
          this.fromFarmers.forEach((item) => {
            item.children.forEach((el) => {
              if (!data.find((element) => element.id === el.id)) {
                data.push(el);
              }
            });
          });
          this.fromFarmers = data;
        })
        .catch((err) => {
          console.log("getCategories err", err);
        });
    },
    getProducts() {
      this.$store
        .dispatch("getProducts")
        .then((res) => {
          this.products = res;
          this.filterProducts();
        })
        .catch((err) => {
          console.log("getProducts", err);
        });
    },
    filterProducts() {
      this.fromFarmersProducts = this.products.filter((item) =>
        this.fromFarmers.find((el) => el.id === item.categoryId)
      );
      this.bestSellerProducts = this.products.filter((item) =>
        this.bestSellers.find((el) => el.id === item.categoryId)
      );
    },
  },
  mounted() {
    this.getCategories();
    this.getProducts();
  },
};
</script>
<style lang="stylus">
.products-section{
	padding: 64px 0;
}
</style>
