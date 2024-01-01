<template>
  <div class="catalog__row-filters filters-row _flex _flex-wrap">
    <div class="wrapper-filters">
      <RadioboxItem label="Filter text 1" desc="filter_1" id="radio_1" />
      <RadioboxItem label="Filter text 2" desc="filter_1" id="radio_2" />
    </div>
    <div class="wrapper-filters">
      <CheckboxItem id="checkbox_1" label="Checkbox 1" />
    </div>
    <div class="wrapper-filters">
      <CheckboxItem id="checkbox_2" label="Checkbox 2" />
    </div>
    <div class="wrapper-filters">
      <CheckboxItem id="checkbox_3" label="Checkbox 3" />
      <span class="vertical-line">|</span>
      <SelectboxItem
        :quantity="selectedItemsQuantity"
        :items="childrenCategories"
        @changeItemState="changeItemState"
      />
    </div>
  </div>
</template>

<script>
import RadioboxItem from "@/components/content/forms/RadioboxItem.vue";
import CheckboxItem from "@/components/content/forms/CheckboxItem.vue";
import SelectboxItem from "@/components/content/forms/SelectboxItem.vue";

export default {
  name: "FiltersRow",
  components: { SelectboxItem, CheckboxItem, RadioboxItem },
  props: {
    currentCategory: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedItemsQuantity: 0,
      childrenCategories: [],
    };
  },
  methods: {
    getChildrenCategories() {
      this.$store.dispatch("getCategories").then((data) => {
        const element = data.find((item) => item.url === this.currentCategory);
        this.childrenCategories = element.children;
      });
    },
    changeItemState(e) {
      this.$emit("sortProductsByTags", e.target.innerText);
    },
  },
  mounted() {
    this.getChildrenCategories();
  },
};
</script>

<style lang="stylus">
.filters-row{
	gap: 16px;
}
.wrapper-filters {
	display: inline-flex;
	align-items: center;
	gap: 16px;
	padding: 12px 18px;
	border-radius: 12px;
	border: 1px solid #D1D1D1;
	background-color: #F9F9F9;
}
.vertical-line{
	font-size: 18px;
	color: #D1D1D1;
}
</style>
