<template>
  <div class="checkbox-item _flex _aic _jcsb">
    <input
      type="checkbox"
      :name="id"
      :id="id"
      class="checkbox-item__input _input-none"
    />
    <label :for="id" class="checkbox-item__label _flex _aic"
      >{{ label }} <slot></slot
    ></label>
  </div>
</template>

<script>
export default {
  name: "CheckboxItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.checkbox-item{
	column-gap: 8px;
	&__label{
		column-gap: 8px;
		position: relative;
		cursor: pointer;
		&::before, &::after{
			content: '';
			display: inline-block;
			border-radius: 3px;
			width: 24px;
			height: 24px;
			transition: all 0.3s ease 0s;
		}
		&::before{
			background-color: transparent;
			border: 1px solid #D1D1D1;
		}
		&::after{
			position: absolute;
			left: 0;
			transform: scale(0);
			background: url("/src/assets/img/form/checkbox-checked.png");
		}
	}
}
input[type=checkbox]:checked + label {
	&::after{
		transform: scale(1);
	}
}
</style>
