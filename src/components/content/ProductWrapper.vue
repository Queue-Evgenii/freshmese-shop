<template>
  <div class="product-wrapper">
    <good-item></good-item>
    <good-item></good-item>
    <good-item></good-item>
  </div>
</template>

<script>
import GoodItem from "@/components/content/GoodItem.vue";
export default {
  name: "ProductWrapper",
  components: { GoodItem },
};
</script>

<style>
.product-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, auto));
  gap: 30px;
}
</style>
