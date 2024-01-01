<template>
  <div v-if="product" class="product-tabs">
    <div class="product-tabs__headings _flex">
      <span @click="changeTab" id="description" class="active"
        >Description</span
      >
      <span @click="changeTab" id="reviews">Reviews</span>
      <span @click="changeTab" id="questions">Questions</span>
    </div>
    <div class="product-tabs__content">
      <DescriptionTab
        class="active"
        id="description-tab"
        :description="product.big_description"
        :vitamins="product.vitamins"
      />
      <ReviewsTab id="reviews-tab" :feedbacks="product.feedbacks" />
      <QuestionsTab id="questions-tab" :questions="product.questions" />
    </div>
  </div>
</template>

<script>
import ReviewsTab from "@/components/product/ReviewsTab.vue";
import DescriptionTab from "@/components/product/DescriptionTab.vue";
import QuestionsTab from "@/components/product/QuestionsTab.vue";
export default {
  name: "ProductTabs",
  components: { QuestionsTab, ReviewsTab, DescriptionTab },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    changeTab(e) {
      this.removeAllModificators();
      this.addModificator(e.target.id);
    },
    removeAllModificators() {
      const tabs = document.querySelector(".product-tabs__content");
      const headings = document.querySelector(".product-tabs__headings");
      for (let i = 0; i < tabs.children.length; ++i) {
        tabs.children[i].classList.remove("active");
        headings.children[i].classList.remove("active");
      }
    },
    addModificator(id) {
      const tab = document.getElementById(id + "-tab");
      const heading = document.getElementById(id);
      tab.classList.add("active");
      heading.classList.add("active");
    },
  },
};
</script>

<style lang="stylus">
.product-tabs{
	&__headings span,
	&__content section{
		transition: all 0.5s ease 0s;
	}
	&__headings{
		span{
			flex: 1 1 33.333%;
			text-align: center;
			padding: 16px 8px
			font-size: 18px;
			font-weight: 600;
			line-height: 20px;
			border-bottom: 1px solid transparent;
			&.active{
				border-bottom: 1px solid #6A983C;
			}
			@media(max-width: 420px) {
				font-size: 16px;
			}
		}
	}
	&__content{
		padding-top: 16px;
		section {
			transform: translate(500%, 0);
			height: 0;
			overflow: hidden;
			visibility: hidden;
			&.active{
				background-color: #fff;
				transform: translate(0, 0);
				height: max-content;
				overflow: visible;
				visibility: visible;
			}
		}
	}
}
</style>
