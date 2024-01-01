<template>
  <div class="selectbox-item _flex _aic">
    <div
      class="selectbox-item__label _flex _aic _jcsb"
      :class="{ active: isActive }"
      @click="openMenu()"
    >
      {{ message }}
    </div>
    <ul
      v-if="items"
      class="selectbox-item__list _flex _f-dir-col"
      :class="{ active: isActive }"
    >
      <li v-for="item in items" :key="item.id" @click="changeItemState">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectboxItem",
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isActive: false,
      selectedItemsQuantity: 0,
    };
  },
  computed: {
    message() {
      if (this.selectedItemsQuantity === 0) {
        return "Select items";
      }
      return this.selectedItemsQuantity + " items selected";
    },
  },
  methods: {
    openMenu() {
      this.isActive = !this.isActive;
    },
    changeItemState(e) {
      e.target.classList.toggle("active");
      if (e.target.classList.contains("active")) {
        ++this.selectedItemsQuantity;
      } else {
        --this.selectedItemsQuantity;
      }
      this.$emit("changeItemState", e);
    },
  },
};
</script>

<style lang="stylus">
.selectbox-item{
	position: relative;
	min-width: 110px;
	justify-content: center;
	cursor: pointer;
	&__label{
		font-size: 12px;
		font-weight: 600;
		line-height: 14px;
		gap: 8px
		&::after{
			content: '';
			height: 12px;
			width: 6px;
			background: url("/src/assets/img/icons/arrow.png") center no-repeat;
			background-size: contain;
			transform: rotate(90deg);
			transition: transform 0.3s ease 0s;
		}
		&.active{
			&::after{
				transform: rotate(-90deg);
			}
		}
	}
	&__list{
		opacity 0;
		visibility: hidden;
		position: absolute;
		z-index:2;
		width: 100%
		top: 130%;
		transition: all 0.3s ease 0s;
		box-shadow: 2px 2px 10px #D1D1D1;
		&.active{
			opacity 1
			visibility: visible;
		}
		li{
			padding: 5px 10px;
			background-color: #F9F9F9;
			overflow: hidden;
			&:hover{
				background-color: #D1D1D1;
			}
			&.active{
				background-color: #92C064;
			}
		}
	}
}
</style>
