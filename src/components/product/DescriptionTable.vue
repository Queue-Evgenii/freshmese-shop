<template>
  <table class="product-table">
    <tr v-if="product.sku" class="product-table__row">
      <th class="product-table__title">SKU:</th>
      <td class="product-table__text">{{ product.sku }}</td>
    </tr>
    <tr v-if="product.category" class="product-table__row">
      <th class="product-table__title">Category:</th>
      <td class="product-table__text">{{ product.category.name }}</td>
    </tr>
    <tr v-if="product.quantity" class="product-table__row">
      <th class="product-table__title">Stock:</th>
      <td class="product-table__text">{{ product.quantity }}</td>
    </tr>
    <tr v-if="product.farm" class="product-table__row">
      <th class="product-table__title">Farm:</th>
      <td class="product-table__text">{{ product.farm }}</td>
    </tr>
    <tr v-if="product.freshness" class="product-table__row">
      <th class="product-table__title">Freshness:</th>
      <td class="product-table__text">{{ product.freshness }}</td>
    </tr>
    <tr v-if="product.quantity_measure" class="product-table__row">
      <th class="product-table__title">Buy by:</th>
      <td class="product-table__text">{{ product.quantity_measure }}</td>
    </tr>
    <tr v-if="product.delivery" class="product-table__row">
      <th class="product-table__title">Delivery:</th>
      <td class="product-table__text">{{ product.delivery }}</td>
    </tr>
    <tr v-if="product.delivery_area" class="product-table__row">
      <th class="product-table__title">Delivery area:</th>
      <td class="product-table__text">{{ product.delivery_area }}</td>
    </tr>
  </table>
</template>

<script>
export default {
  name: "DescriptionTable",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.product-table{
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 32px;
	row-gap: 16px;
	&__row{
		display: grid;
		grid-template-columns: repeat(2, 1fr)
		gap: 6px;
		text-align: left;
		th{
			color: #A9A9A9;
			font-weight: 400;
		}
	}
}
</style>
