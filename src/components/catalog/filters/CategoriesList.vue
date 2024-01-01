<template>
  <div class="categories-list _list _flex _f-dir-col">
    <div class="categories-list__title _title">Categories</div>
    <ul class="categories-list__items _list-items _flex _f-dir-col">
      <li
        class="categories-list__item _list-item _flex _jcsb"
        v-for="item in categories"
        :key="item.id"
      >
        <router-link :to="{ name: 'catalog', params: { name: item.url } }">{{
          item.name
        }}</router-link>
        <span class="quantity-marker">{{ item.products.length }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CategoriesList",
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="stylus"></style>
