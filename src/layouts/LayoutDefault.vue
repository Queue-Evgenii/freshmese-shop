<template>
  <div class="layout-default">
    <header class="header">
      <TopHeader class="header__top" :headerMenu="headerMenu" />
      <div class="header__content"></div>
      <div class="header__bottom"></div>
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import TopHeader from "@/components/header/TopHeader";
export default {
  name: "LayoutDefault",
  components: {
    TopHeader,
  },
  data() {
    return {
      headerMenu: [
        {
          id: 1,
          name: "Blog",
          url: "/blog",
        },
        {
          id: 2,
          name: "About Us",
          url: "/about",
        },
        {
          id: 3,
          name: "Careers",
          url: "/careers",
        },
      ],
    };
  },
};
</script>

<style lang="stylus"></style>
