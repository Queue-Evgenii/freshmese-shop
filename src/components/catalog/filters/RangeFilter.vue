<template>
  <div class="range-filter">
    <div class="range-filter__title _title">Price</div>
    <div class="range-filter__wrapper range-wrapper _flex _f-dir-col">
      <div id="range-slider" class="range-wrapper__range"></div>
      <div class="range-wrapper__inputs _flex _jcsb">
        <div class="range-wrapper__column _flex _f-dir-col">
          <label class="range-wrapper__label">Min</label>
          <input
            type="text"
            name=""
            id="range-input-1"
            class="range-wrapper__input"
            v-model="lowerValue"
            @blur="setValue()"
          />
        </div>
        <span>-</span>
        <div class="range-wrapper__column _flex _f-dir-col">
          <label class="range-wrapper__label">Max</label>
          <input
            type="text"
            name=""
            id="range-input-2"
            class="range-wrapper__input"
            v-model="upperValue"
            @blur="setValue()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
export default {
  name: "RangeFilter",
  data() {
    return {
      rangeSlider: null,
      lowerValue: 50,
      upperValue: 250,
      minValue: 0,
      maxValue: 350,
    };
  },
  methods: {
    createRange() {
      this.rangeSlider = noUiSlider.create(
        document.getElementById("range-slider"),
        {
          start: [this.lowerValue, this.upperValue],
          range: {
            min: this.minValue,
            max: this.maxValue,
          },
          connect: true,
        }
      );
      this.getValuesOnUpdate();
      this.setInputsValueOnUpdate();
    },
    getValuesOnUpdate() {
      this.rangeSlider.on("update", () => {
        this.getValues();
      });
    },
    setInputsValueOnUpdate() {
      const input1 = document.getElementById("range-input-1");
      const input2 = document.getElementById("range-input-2");
      const inputs = [input1, input2];
      this.rangeSlider.on("update", function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });
    },
    getValues() {
      if (this.rangeSlider) {
        const values = this.rangeSlider.get();
        this.lowerValue = values[0];
        this.upperValue = values[1];
      }
    },
    setValue() {
      if (this.rangeSlider) {
        this.rangeSlider.set([this.lowerValue, this.upperValue]);
      }
    },
  },
  mounted() {
    this.createRange();
  },
};
</script>

<style lang="stylus">
.range-filter__title{
	padding-bottom: 24px;
}
.range-wrapper{
	row-gap: 24px;
	&__inputs{
		gap: 16px;
		align-items: flex-end
		span{
			display: flex;
			align-items: center;
			height: 40px
			color: #A9A9A9;
		}
	}
	&__label{
		font-size: 12px;
		font-weight: 600;
		line-height: 14px;
		margin-bottom: 5px;
	}
	&__input{
		width: 85px;
		padding: 8px 16px;
		border-radius: 12px;
		border: 1px solid #D1D1D1;
		background-color: #F9F9F9;
		color: #A9A9A9;
	}
}
#range-slider {
	height: 6px;
	.noUi-connect {
		background: #6A983C;
	}
	.noUi-connects {
		background: #EBEBEB;
	}
	.noUi-handle {
		height: 20px;
		width: 20px;
		top: -7.5px;
		right: -10px;
		background-color: #fff;
		border-radius: 10px;
		border: 1px solid #D1D1D1;
	}
}
</style>
