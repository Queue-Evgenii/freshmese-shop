<template>
  <section v-if="feedbacks" class="reviews-tab _flex _f-dir-col">
    <div
      v-for="item in feedbacks"
      :key="item.id"
      class="reviews-tab__item _flex _f-dir-col"
    >
      <div class="reviews-tab__info _flex _aic">
        <span>{{ item.user_name }}</span
        ><StarRating :rating="item.rating" />
      </div>
      <div class="reviews-tab__text">{{ item.text }}</div>
    </div>
  </section>
</template>

<script>
import StarRating from "@/components/content/forms/StarRating.vue";
export default {
  name: "ReviewsTab",
  components: { StarRating },
  props: {
    feedbacks: {
      type: Array,
    },
  },
};
</script>

<style>
.reviews-tab {
  row-gap: 16px;
}
.reviews-tab__item {
  row-gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d1d1d1;
}
.reviews-tab__info {
  column-gap: 6px;
}
</style>
