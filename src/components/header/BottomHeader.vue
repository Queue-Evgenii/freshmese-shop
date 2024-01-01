<template>
  <div class="bottom-header">
    <div class="bottom-header__container _container">
      <ul class="bottom-header__categories _flex">
        <li
          v-for="item in categoryList"
          :key="item.id"
          class="bottom-header__item"
        >
          <router-link :to="{ name: 'catalog', params: { name: item.url } }">{{
            item.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomHeader",
  data() {
    return {
      categoryList: [],
    };
  },
  methods: {
    getCategories() {
      this.$store
        .dispatch("getCategories")
        .then((res) => {
          this.categoryList = res.slice(0, 6);
        })
        .catch((err) => {
          console.log("getCategories", err);
        });
    },
  },
  mounted() {
    this.getCategories();
  },
};
</script>

<style lang="stylus">
.bottom-header{
  background-color: #F9F9F9;
  &__categories{
    align-items: center;
    gap: 16px;
    padding: 16px 0;
  }
  &__item{
    a{
      font-weight: 500;
      font-size: 15px;
      line-height: 22px;
      color: #151515;
    }
  }
}
@media(max-width: 678px){
	.bottom-header{
		background-color: transparent;
		&__categories{
			flex-direction: column;
			align-items: flex-start;
			a{
				font-size: 18px
			}
		}
	}
}
</style>
