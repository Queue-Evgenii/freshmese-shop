<template>
  <div class="product-images">
    <div class="product-images__wrapper _flex _f-dir-col _gap-35">
      <div v-for="image in images" :key="image.id" class="product-images__item">
        <img :src="image" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductImages",
  props: {
    images: {
      type: Array,
    },
  },
};
</script>

<style lang="stylus">
.product-images{
	&__item, &__item img{
		width: 100%;
		height: 100%;
	}
	&__item{
		border-radius: 12px;
		overflow: hidden
	}
}
</style>
