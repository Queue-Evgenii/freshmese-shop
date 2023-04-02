<template>
  <div class="product-wrapper">
    <product-item></product-item>
    <product-item></product-item>
    <product-item></product-item>
  </div>
</template>

<script>
import ProductItem from "@/components/content/ProductItem";
export default {
  name: "ProductWrapper",
  components: { ProductItem },
};
</script>

<style>
.product-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 270px));
  gap: 32px;
}
</style>
