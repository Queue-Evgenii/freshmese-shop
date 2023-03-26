<template>
  <div class="home">
    {{ products }}
  </div>
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
