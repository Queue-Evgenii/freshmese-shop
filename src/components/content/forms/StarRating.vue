<template>
  <ul ref="rating" class="star-rating _flex">
    <li class="star-rating__item"></li>
    <li class="star-rating__item"></li>
    <li class="star-rating__item"></li>
    <li class="star-rating__item"></li>
    <li class="star-rating__item"></li>
  </ul>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
  methods: {
    starSetup() {
      const items = this.$refs.rating.childNodes;
      for (let i = 0; i < Math.round(this.rating); ++i) {
        items[i].classList.add("active");
      }
    },
  },
  mounted() {
    this.starSetup();
  },
};
</script>

<style lang="stylus">
.star-rating {
	&__item {
		&::before{
			content: "☆";
			display: inline-block;
			font-size: 24px;
			color: #A9A9A9;
		}
		&::after{
			display: none;
			content: "★"
			font-size: 24px;
			color: #FDBC15;
		}
		&.active{
			&::before{
				display: none;
			}
			&::after{
				display: inline-block;
			}
		}
	}
}
</style>
