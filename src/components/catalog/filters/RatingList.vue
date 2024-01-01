<template>
  <div class="rating-list _list _flex _f-dir-col">
    <div class="rating-list__title _title">Rating</div>
    <ul class="rating-list__items _list-items _flex _f-dir-col">
      <li class="rating-list__item _list-item _flex _jcsb">
        <CheckboxItem id="5-stars"><StarRating :rating="5" /></CheckboxItem>
      </li>
      <li class="rating-list__item _list-item _flex _jcsb">
        <CheckboxItem id="4-stars"><StarRating :rating="4" /></CheckboxItem>
      </li>
      <li class="rating-list__item _list-item _flex _jcsb">
        <CheckboxItem id="3-stars"><StarRating :rating="3" /></CheckboxItem>
      </li>
      <li class="rating-list__item _list-item _flex _jcsb">
        <CheckboxItem id="2-stars"><StarRating :rating="2" /></CheckboxItem>
      </li>
      <li class="rating-list__item _list-item _flex _jcsb">
        <CheckboxItem id="1-stars"><StarRating :rating="1" /></CheckboxItem>
      </li>
    </ul>
  </div>
</template>

<script>
import CheckboxItem from "@/components/content/forms/CheckboxItem.vue";
import StarRating from "@/components/content/forms/StarRating.vue";
export default {
  name: "RatingList",
  components: {
    CheckboxItem,
    StarRating,
  },
};
</script>

<style scoped></style>
