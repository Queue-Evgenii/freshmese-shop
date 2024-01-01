<template>
  <layout-default>
    <main class="product-page">
      <div class="_container _flex _f-dir-col _gap-35">
        <div class="product-page__wrapper _flex _gap-35">
          <ProductImages v-if="product" :images="gallery" />
          <div class="product-content _flex _f-dir-col">
            <ProductDescription v-if="product" :product="product" />
            <ProductTabs :product="product" />
          </div>
        </div>
        <div
          v-if="relatedProducts"
          class="related-products _flex _f-dir-col _gap-35"
        >
          <div class="related-products__title _title">Related products</div>
          <ProductWrapper :products="relatedProducts" />
        </div>
      </div>
    </main>
  </layout-default>
</template>

<script>
import ProductImages from "@/components/product/ProductImages.vue";
import ProductDescription from "@/components/product/ProductDescription.vue";
import ProductTabs from "@/components/product/ProductTabs.vue";
import ProductWrapper from "@/components/content/ProductWrapper.vue";
export default {
  name: "ProductView",
  components: {
    ProductImages,
    ProductDescription,
    ProductTabs,
    ProductWrapper,
  },
  data() {
    return {
      product: null,
      gallery: [],
      relatedProducts: [],
    };
  },
  computed: {
    getCurrentProductId() {
      return this.$route.params.id;
    },
  },
  methods: {
    getProductById() {
      this.$store
        .dispatch("getProductById", this.getCurrentProductId)
        .then((data) => {
          this.product = data;
          this.setGallery();
          this.getProductByCategoryId();
        });
    },
    getProductByCategoryId() {
      this.$store
        .dispatch("getProductByCategoryId", this.product.categoryId)
        .then((data) => {
          this.relatedProducts = data.slice(0, 4);
        });
    },
    setGallery() {
      this.gallery = [];
      if (this.product.gallery) {
        this.product.gallery.forEach((item) => {
          this.gallery.push(item);
        });
      }
      if (this.product.image) this.gallery.push(this.product.image);
    },
  },
  mounted() {
    this.getProductById();
  },
  watch: {
    getCurrentProductId() {
      this.getProductById();
    },
  },
};
</script>

<style lang="stylus">
.product-page{
	&__wrapper{
		padding: 32px 0;
		@media(max-width: 992px) {
			flex-direction: column;
		}
	}
	.product-images, .product-content{
		flex: 0 1 50%;
	}
	.product-content{
		gap: 64px
	}
}
.related-products{
	padding: 32px 0;
}
</style>
