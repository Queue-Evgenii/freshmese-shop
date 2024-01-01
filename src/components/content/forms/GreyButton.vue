<template>
  <button class="grey-button">{{ label }}</button>
</template>

<script>
export default {
  name: "GreyButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.grey-button {
  flex: 1 1 auto;
  padding: 12px 16px;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #a9a9a9;
  background: transparent;
  color: #a9a9a9;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
}
</style>
