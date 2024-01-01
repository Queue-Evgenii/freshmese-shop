<template>
  <router-link
    :to="{ name: 'product', params: { id: product.id } }"
    class="cart-item _flex"
  >
    <div class="cart-item__image">
      <img :src="product.image" />
    </div>
    <div class="cart-item__content _flex _f-dir-col">
      <div class="cart-item__text _flex _f-dir-col">
        <div class="cart-item__title _title">{{ product.name }}</div>
        <table class="cart-item__table">
          <tr>
            <th>Freshness</th>
            <td>{{ product.freshness }}</td>
          </tr>
          <tr v-if="product.farm">
            <th>Farm</th>
            <td>{{ product.farm }}</td>
          </tr>
        </table>
      </div>
      <div class="cart-item__actions actions-wrapper _flex">
        <div class="product-actions__info">
          <div class="product-actions__price">{{ product.price + " USD" }}</div>
          <div
            v-show="product.first_price"
            class="product-actions__first-price"
          >
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
        <GreyButton
          label="Remove"
          @click.prevent="removeProduct()"
          class="product-actions__remove"
        />
      </div>
    </div>
  </router-link>
</template>

<script>
import GreyButton from "@/components/content/forms/GreyButton.vue";
export default {
  name: "GoodItem",
  components: { GreyButton },
  data() {
    return {
      inputValue: 1,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    removeProduct() {
      console.log(this.product.id);
    },
  },
  mounted() {
    this.inputValue = this.amount;
  },
};
</script>

<style lang="stylus">
.cart-item{
	column-gap: 16px;
	&__image{
		max-width: 150px;
		height: auto;
		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__content {
		flex: 1 1 100%;
		row-gap: 16px;
	}
	&__text {
		row-gap: 8px;
	}
	&__table {
		text-align: left;
		tr{
			display: grid;
			grid-template-columns: repeat(2, 1fr)
			column-gap: 8px;
		}
	}
}
	.actions-wrapper{
		gap: 16px;
	}
.product-actions{
	&__price{
		color: #6A983C;
		font-size: 26px;
		font-weight: 600;
		line-height: 28px;
	}
	&__first-price{
		color: #A9A9A9
		font-size: 12px;
		font-weight: 600;
		line-height: 14px;
		text-decoration: line-through;
	}
	&__quantity{
		column-gap: 16px;
		padding: 14px 16px;
		border-radius: 12px;
		border: 1px solid #D1D1D1;
		background-color: #F9F9F9;
		input {
			flex: 1 1 auto;
		}
	}
	&__counter{
		background-color: transparent;
		width: 20px;
		text-align: center;
	}
	&__remove{
		flex: 0 1 20%;
	}
}
</style>
