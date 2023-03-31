<template>
  <layout-default>
    <div class="home _container _flex">
      <sidebar-default></sidebar-default>
      <div class="content">
        <product-wrapper></product-wrapper>
      </div>
    </div>
  </layout-default>
</template>

<script>
import ProductWrapper from "@/components/content/ProductWrapper.vue";
import SidebarDefault from "@/components/SidebarDefault.vue";
export default {
  name: "HomeView",
  components: { ProductWrapper, SidebarDefault },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    getProducts() {
      this.$store
        .dispatch("getProducts")
        .then((res) => {
          console.log(res);
          this.products = res;
        })
        .catch((err) => {
          console.log("getProducts", err);
        });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<style lang="stylus">
.content {
  padding: 60px 0px;
}
</style>
