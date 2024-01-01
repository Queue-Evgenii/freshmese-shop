<template>
  <div class="radiobox-item">
    <input
      type="radio"
      :name="desc"
      :id="id"
      class="radiobox-item__input _input-none"
    />
    <label :for="id" class="radiobox-item__label _flex _aic">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioboxItem",
  props: {
    label: {
      type: String,
    },
    desc: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.radiobox-item{
	display: inline-block;
	&__label{
		column-gap: 8px;
		position: relative;
		cursor: pointer;
		&::before, &::after{
			content: '';
			display: block;
			border-radius: 50%;
			transition: all 0.3s ease 0s;
		}
		&::before{
			width: 24px;
			height: 24px;
			background-color: transparent;
			border: 1px solid #D1D1D1;
		}
		&::after{
			position: absolute;
			left: 6px;
			transform: scale(0);
			width: 12px;
			height: 12px;
			background-color: #FFFFFF;
		}
	}
}
input[type=radio]:checked + label {
	&::before{
		background-color: #151515;
		border: 1px solid #151515;
	}
	&::after{
		transform: scale(1);
	}
}
</style>
