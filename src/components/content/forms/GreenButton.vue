<template>
  <button class="green-button">{{ label }}</button>
</template>

<script>
export default {
  name: "GreenButton",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  methods: {},
};
</script>

<style>
.green-button {
  flex: 1 1 auto;
  padding: 12px 16px;
  align-items: center;
  border-radius: 12px;
  border: 2px solid #46760a;
  background: #6a983c;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 17px;
}
</style>
