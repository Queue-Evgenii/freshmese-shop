<template>
  <section class="description-tab _flex _f-dir-col">
    <p v-if="description" class="description-tab__text">{{ description }}</p>
    <table v-if="vitamins" class="description-tab__table">
      <tr class="description-tab__headings">
        <td>Vitamins</td>
        <td>Quantity</td>
        <td>% DV</td>
      </tr>
      <tr v-for="item in vitamins" :key="item.id">
        <td>{{ item.name }}</td>
        <td>{{ item.quantity }}</td>
        <td>{{ item.dv }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "DescriptionTab",
  props: {
    description: {
      type: String,
    },
    vitamins: {
      type: Array,
    },
  },
};
</script>

<style lang="stylus">
.description-tab{
	row-gap: 16px;
	td{
		color: #575757;
	}
	&__text {
		color: #151515;
		line-height: 24px;
	}
	&__headings {
		font-size: 12px;
		font-weight: 600;
		line-height: 14px;
	}
	&__table{
		tr {
			display: flex;
			column-gap: 16px;
			&:nth-child(even){
				background-color: #FDFDFD;
			}
			td{
				padding: 16px 0;
				flex: 1 1 30%;
				min-width: 50px;
				&:first-child{
					flex: 1 1 40%;
				}
			}
		}
	}
}
</style>
