<template>
  <ul class="content-catalog__products products-list">
    <ProductWrapper :products="products" />
  </ul>
</template>

<script>
import ProductWrapper from "@/components/content/ProductWrapper.vue";
export default {
  name: "ProductsList",
  components: { ProductWrapper },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
