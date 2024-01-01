<template>
  <button class="action-button">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.action-button {
  column-gap: 6px;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
}
</style>
