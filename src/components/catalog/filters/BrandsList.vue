<template>
  <div class="brands-list _list _flex _f-dir-col">
    <div class="brands-list__title _title">Brands</div>
    <ul class="brands-list__items _list-items _flex _f-dir-col">
      <li
        class="brands-list__item _list-item _flex _jcsb"
        v-for="item in brands"
        :key="item.id"
      >
        <CheckboxItem :id="item">{{ item }}</CheckboxItem>
      </li>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from "@/components/content/forms/CheckboxItem.vue";
export default {
  name: "BrandsList",
  components: { CheckboxItem },
  props: {
    brands: {
      type: Array,
    },
  },
};
</script>

<style scoped></style>
