<template>
  <div class="layout-default">
    <header class="header">
      <top-header
        v-if="windowWidth >= 678"
        class="header__top"
        :headerMenu="headerMenu"
      />
      <content-header
        class="header__content"
        :windowWidth="windowWidth"
        :headerMenu="headerMenu"
      />
      <bottom-header v-if="windowWidth >= 678" class="header__bottom" />
    </header>
    <main class="main">
      <slot></slot>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
import TopHeader from "@/components/header/TopHeader";
import ContentHeader from "@/components/header/ContentHeader";
import BottomHeader from "@/components/header/BottomHeader.vue";
export default {
  name: "LayoutDefault",
  components: {
    BottomHeader,
    ContentHeader,
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
      windowWidth: window.innerWidth,
    };
  },
  methods: {
    checkWidth() {
      this.windowWidth = window.innerWidth;
    },
  },
  mounted() {
    window.addEventListener("resize", this.checkWidth);
  },
};
</script>

<style lang="stylus"></style>
