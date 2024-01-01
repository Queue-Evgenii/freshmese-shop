<template>
  <div class="product-wrapper">
    <product-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import ProductItem from "@/components/content/ProductItem";
export default {
  name: "ProductWrapper",
  components: { ProductItem },
  props: {
    products: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.product-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 32px;
}
@media (min-width: 541px) {
  .row-direction.product-wrapper {
    grid-template-columns: 1fr;
  }
  @media (min-width: 993px) {
    .row-direction.product-wrapper {
      grid-auto-rows: 255px;
    }
  }
  @media (max-width: 768px) {
    .row-direction.product-wrapper {
      grid-auto-rows: 180px;
    }
  }
}
</style>
