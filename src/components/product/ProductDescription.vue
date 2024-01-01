<template>
  <div class="product-description _flex _f-dir-col _gap-35">
    <div class="product-description__block">
      <h2 class="product-description__title _grand-title">
        {{ product.name }}
      </h2>
      <div
        v-if="product.feedbacks"
        class="product-description__rating _flex _aic"
      >
        <StarRating :rating="product.rating" />
        <span>{{ product.feedbacks.length + " customer review" }}</span>
      </div>
    </div>
    <div v-if="product.description" class="product-description__block">
      <p class="product-description__description">{{ product.description }}</p>
    </div>
    <div class="product-description__block">
      <DescriptionTable :product="product" />
    </div>
    <div class="product-description__block">
      <ProductActions :product="product" />
    </div>
  </div>
</template>

<script>
import StarRating from "@/components/content/forms/StarRating.vue";
import DescriptionTable from "@/components/product/DescriptionTable.vue";
import ProductActions from "@/components/product/ProductActions.vue";
export default {
  name: "ProductDescription",
  components: { StarRating, DescriptionTable, ProductActions },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.product-description{
	&__title {
		margin-bottom: 8px;
	}
	&__rating{
		gap: 8px;
	}
}
</style>
