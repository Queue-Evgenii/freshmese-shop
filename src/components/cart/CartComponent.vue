<template>
  <div ref="cart" class="cart-wrapper">
    <div class="_container _flex _f-dir-col _gap-35">
      <header class="cart-wrapper__header _flex _aic _jcsb _gap-35">
        <div class="_grand-title">Shopping cart</div>
        <div @click="closeCart()" class="_cross"></div>
      </header>
      <div class="cart-wrapper__content _flex _f-dir-col _gap-35">
        <CartProduct
          v-for="item in getCartList"
          :key="item.product.id"
          :product="item.product"
          :amount="item.amount"
        />
      </div>
      <footer class="cart-wrapper__footer">
        <div class="cart-wrapper__summary _flex _f-dir-col">
          <span>Subtotal</span>
          <div class="_grand-title">72.2</div>
        </div>
        <div class="cart-wrapper__actions _flex _gap-35">
          <GreyButton label="Continue shopping" @click="closeCart()" />
          <GreenButton label="Go to Checkout" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/content/CartProduct.vue";
import GreenButton from "@/components/content/forms/GreenButton.vue";
import GreyButton from "@/components/content/forms/GreyButton.vue";
export default {
  name: "CartComponent",
  components: {
    CartProduct,
    GreenButton,
    GreyButton,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    getCartList() {
      return this.$store.state.cartList;
    },
  },
  methods: {
    closeCart() {
      this.$emit("closeCart");
    },
  },
};
</script>

<style lang="stylus">
.cart-wrapper{
	padding: 30px 0;
	position: absolute;
	width: 100vw;
	height: 100vh;
	z-index: 3;
	background-color: rgba(#151515, 0.5);
	transform: translate(0, -100%);
	transition: transform 0.3s ease 0s;
	&.active{
		transform: translate(0, 0);
	}
	._container{
		width: 100%;
		max-width: 800px;
		background-color: #fff;
	}
	&__content{
		flex: 1 1 100%;
	}
	&__summary{
		padding: 26px;
		border-bottom: 1px solid #EBEBEB;
		span {
			color: #000;
			font-size: 12px;
			font-weight: 600;
			line-height: 14px;
		}
	}
	&__footer,
	&__header,
	&__actions{
		padding: 24px 0;
	}
}
</style>
