<template>
  <layout-default>
    <div class="home _container">
      <sidebar-default></sidebar-default>
      <div class="content"></div>
    </div>
  </layout-default>
</template>

<script>
import SidebarDefault from "@/components/SidebarDefault.vue";
export default {
  name: "HomeView",
  components: { SidebarDefault },
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
