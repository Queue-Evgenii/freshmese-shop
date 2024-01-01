<template>
  <section v-if="questions" class="questions-tab _flex _f-dir-col">
    <div
      v-for="item in questions"
      :key="item.id"
      class="questions-tab__item _flex _f-dir-col"
    >
      <div class="questions-tab__info _flex _aic">
        <span>{{ item.user_name }}</span>
      </div>
      <div class="questions-tab__text">{{ item.question }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionsTab",
  props: {
    questions: {
      type: Array,
    },
  },
};
</script>

<style>
.questions-tab {
  row-gap: 16px;
}
.questions-tab__item {
  row-gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d1d1d1;
}
.questions-tab__text {
  line-height: 18px;
}
</style>
