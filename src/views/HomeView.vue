<template>
  <layout-default>
    <div class="home"></div>
  </layout-default>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
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
