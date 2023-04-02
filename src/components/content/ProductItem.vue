<template>
  <div class="product-box">
    <div class="image-wrapper">
      <div class="sale"></div>
      <div class="image"></div>
    </div>
    <div class="text-wrapper">
      <div class="product-title">Product Title</div>
      <div class="product-description">
        Space for a small product description
      </div>
    </div>
    <div class="buy-wrapper _flex">
      <div class="price">1.48 USD</div>
      <div class="buy_now">Buy now</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
};
</script>

<style lang="stylus">
.product-box {
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  padding: 16px;
}
.text-wrapper {
  margin-bottom: 20px;
}
.product-title {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 5px;
  color: #151515;
}
.product-description {
  font-size: 12px;
  line-height: 16px;
  color: #575757;
}
.buy-wrapper {
  justify-content: space-between;
  align-items: center;
}
.price {
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #151515;
}
.buy_now {
  padding: 6px 12px;
  cursor: pointer;
  background: #6A983C;
  border: 2px solid #46760A;
  border-radius: 12px;
  font-weight: 700;
  font-size: 15px;
  line-height: 22px;
  color: #FFFFFF;
}
</style>
