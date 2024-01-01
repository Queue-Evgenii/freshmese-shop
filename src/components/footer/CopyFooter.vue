<template>
  <div class="footer-copy">Copyright © {{ getYear }} petrbilek.com</div>
</template>

<script>
export default {
  name: "CopyFooter",
  computed: {
    getYear() {
      const date = new Date();
      return date.getFullYear();
    },
  },
};
</script>

<style scoped></style>
