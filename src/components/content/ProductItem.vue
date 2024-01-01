<template>
  <router-link
    :to="{ name: 'product', params: { id: product.id } }"
    class="product-box _flex"
  >
    <div class="product-box__image image-wrapper">
      <div class="image-wrapper__sale"></div>
      <img :src="product.image" class="image-wrapper__image" />
    </div>
    <div class="product-box__text">
      <div class="product-box__title">{{ product.name }}</div>
      <div class="product-box__description">
        {{ product.description }}
      </div>
      <div class="product-box__row-description">
        <div class="product-box__freshness _flex _gap-35">
          <span>Freshness</span><span>{{ product.freshness }}</span>
        </div>
        <div v-if="product.farm" class="product-box__farm _flex _gap-35">
          <span>Farm</span><span>{{ product.farm }}</span>
        </div>
        <div class="product-box__delivery _flex _gap-35">
          <span>Delivery</span><span>{{ product.delivery_area }}</span>
        </div>
        <div class="product-box__stock _flex _gap-35">
          <span>Stock</span>
          <span>{{ product.quantity + " " + product.quantity_measure }}</span>
        </div>
      </div>
    </div>
    <div class="product-box__actions actions-wrapper _flex">
      <div class="actions-wrapper__price">
        {{ product.price + " USD" }}
        <span v-if="product.first_price" class="actions-wrapper__first-price">{{
          product.first_price
        }}</span>
      </div>
      <div class="actions-wrapper__description">
        <span>{{ getShipping }}</span>
        {{ product.delivery }}
      </div>
      <div class="actions-wrapper__button">Buy now</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getShipping() {
      if (this.product.shipping_price)
        return this.product.shipping_price + " USD";
      return "Free shipping";
    },
  },
};
</script>

<style lang="stylus">
.image-wrapper {
	position: relative;
	&__image {
		height: 150px;
		width: 100%;
		object-fit: cover;
		border-radius: 12px;
	}
	&__sale {
		position: absolute;
	}
}
.product-box {
	gap: 20px;
	flex-direction: column;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  padding: 16px;
	&__text {
		flex: 1 1 100%;
	}
	&__title {
		font-size: 15px;
		line-height: 22px;
		margin-bottom: 5px;
		color: #151515;
	}
	&__description {
		font-size: 12px;
		line-height: 16px;
		color: #575757;
	}
	&__row-description{
		display: none;
	}
}
.actions-wrapper {
  justify-content: space-between;
  align-items: center;
	&__price {
		position: relative;
		padding-bottom: 20px;
		font-weight: 600;
		font-size: 18px;
		line-height: 27px;
		color: #151515;
	}
	&__first-price{
		position: absolute;
		left: 0;
		bottom: 0;
		font-size: 12px;
		color: #A9A9A9;
		text-decoration: line-through;
	}
	&__description{
		display: none;
	}
	&__button {
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
}
@media(min-width: 541px) {
	@media(max-width: 768px), (min-width: 993px) {
		.row-direction {
			.image-wrapper {
				&__image {
					height: 100%;
					max-width: 300px;
					min-width: 150px;
				}
			}
			.product-box {
				flex-direction:row;
				height: 100%;
				&__text {
					flex: 1 1 auto;
				}
				&__actions {
					flex-direction: column;
				}
				&__row-description{
					padding: 25px 0;
					display: flex;
					flex-direction: column;
					gap: 12px
					span{
						flex: 0 1 130px;
						display: inline-block;
						font-size: 12px;
						color: #A9A9A9;
						text-align: left;
						white-space nowrap
					}
				}
			}
			.actions-wrapper{
				&__description{
					display: flex;
					flex-direction: column;
					color: #A9A9A9;
					font-size: 12px;
					padding-bottom: 20px;
					span{
						font-weight: 600;
					}
				}
			}
		}
	}
	@media(max-width: 768px){
		.row-direction {
			.image-wrapper {
				&__image {
					max-width: 200px;
					min-width: 50px;
				}
			}
			.product-box {
				&__row-description{
					display: none;
				}
			}
			.actions-wrapper{
				&__description{
					display: none;
				}
			}
		}
	}
}
</style>
