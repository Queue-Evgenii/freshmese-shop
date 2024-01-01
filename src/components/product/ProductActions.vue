<template>
  <div class="product-actions">
    <div class="product-actions__row _p-16 _jcsb _aic">
      <div class="product-actions__info">
        <div class="product-actions__price">{{ product.price + " USD" }}</div>
        <div v-show="product.first_price" class="product-actions__first-price">
          {{ product.first_price + " USD" }}
        </div>
      </div>
      <div class="product-actions__quantity _flex _aic">
        <input
          type="text"
          v-model="inputValue"
          class="product-actions__counter"
        />
        <span>|</span>
        <SelectboxItem
          v-if="typeof product.quantity_measure !== 'string'"
          items="product.quantity_measure"
        />
        <div v-else class="product-actions__measure">
          {{ product.quantity_measure }}
        </div>
      </div>
      <GreenButton @click="addToCart()" label="Add to cart" />
    </div>
    <div class="product-actions__row">
      <div class="button-container _flex _aic">
        <img src="@/assets/img/icons/favorite.png" alt="" />
        <ActionButton
          icon="assets/img/icons/favorite.png"
          label="Add to my wish list"
        />
      </div>
      <div class="button-container _flex _aic">
        <img src="@/assets/img/icons/compare.png" alt="" />
        <ActionButton label="Compare" />
      </div>
    </div>
  </div>
</template>

<script>
import GreenButton from "@/components/content/forms/GreenButton.vue";
import SelectboxItem from "@/components/content/forms/SelectboxItem.vue";
import ActionButton from "@/components/content/forms/ActionButton.vue";
export default {
  name: "ProductActions",
  components: { GreenButton, SelectboxItem, ActionButton },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      inputValue: 1,
      unitOfMeasure: null,
    };
  },
  computed: {
    getCurrentProductId() {
      return this.$route.params.id;
    },
  },
  methods: {
    addToCart() {
      const product = Object.assign(this.product);
      product.category = {};
      const el = {
        product: this.product,
        unit_of_measure: this.unitOfMeasure || this.product.quantity_measure,
      };
      setTimeout(() => {
        el.amount = this.getInputValue();
        this.clearCartList();
        this.$store.state.cartList.push(el);
        this.setItemToLocalStorage(this.$store.state.cartList);
      }, 0);
    },
    setItemToLocalStorage(src) {
      localStorage.setItem("cart_list", JSON.stringify(src));
    },
    clearCartList() {
      if (this.existInCartList(this.product)) {
        const index = this.$store.state.cartList.findIndex(
          (el) => el.id === this.product.id
        );
        this.$store.state.cartList.splice(index, 1);
      }
    },
    existInCartList(el) {
      return this.$store.state.cartList.find(
        (item) => item.product.id === el.id
      );
    },
    setInputValue() {
      if (this.$store.state.cartList.length === 0) return;
      setTimeout(() => {
        this.inputValue = this.$store.state.cartList.find(
          (el) => el.product.id == this.product.id
        ).amount;
      }, 1000);
    },
    getInputValue() {
      if (this.inputValue > this.product.quantity) return this.product.quantity;
      return this.inputValue;
    },
  },
  mounted() {
    this.setInputValue();
  },
  watch: {
    getCurrentProductId() {
      this.setInputValue();
    },
  },
};
</script>

<style lang="stylus">
.product-actions{
	&__row{
		display: grid;
		grid-template-columns: 140px repeat(2, 1fr);
		column-gap:24px;
		row-gap:16px;
		@media(max-width: 560px) {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 1fr);
		}
	}
	&__row:first-child{
		margin-bottom: 24px;
	}
}
.button-container{
	column-gap: 8px;
	img {
		width: 16px;
		height: 16px;
	}
}
</style>
