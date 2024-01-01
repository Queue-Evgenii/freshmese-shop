<template>
  <div class="layout-default">
    <CartComponent @closeCart="closeCart" :class="{ active: isCartActive }" />
    <HeaderComponent @openCart="openCart" />
    <main class="main">
      <slot></slot>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import CartComponent from "@/components/cart/CartComponent.vue";
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";
export default {
  name: "LayoutDefault",
  components: {
    CartComponent,
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {
      isCartActive: false,
    };
  },
  methods: {
    getCartListFromLocalStorege() {
      this.$store.state.cartList =
        JSON.parse(localStorage.getItem("cart_list")) || [];
    },
    openCart() {
      this.isCartActive = true;
    },
    closeCart() {
      this.isCartActive = false;
    },
  },
  mounted() {
    this.getCartListFromLocalStorege();
  },
};
</script>

<style lang="stylus"></style>
