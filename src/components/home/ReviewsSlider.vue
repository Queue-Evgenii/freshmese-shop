<template>
  <section class="reviews reviews-wrapper">
    <div class="reviews__header _flex _container _jcsb">
      <h3 class="reviews__title">Our customers says</h3>
      <router-link to="/reviews" class="reviews__more _flex"
        >More reviews</router-link
      >
    </div>
    <div class="reviews__slider slider">
      <swiper
        :centered-slides="auto"
        :loop="true"
        :space-between="32"
        initial-slide="2"
        :navigation="true"
        :breakpoints="{
          678: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }"
        :modules="modules"
        @swiper="onSwiper"
        :style="
          innerWidth < 1500
            ? 'overflow: visible; width: 1170px; margin: 0 auto'
            : 'max-width: 1170px; margin: 0 auto'
        "
      >
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
        <swiper-slide>
          <ReviewComponent />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import ReviewComponent from "@/components/home/ReviewComponent.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// import "swiper/css";
export default {
  name: "ReviewsSlider",
  components: {
    Swiper,
    SwiperSlide,
    ReviewComponent,
  },
  setup() {
    const onSwiper = (swiper) => {
      swiper.text;
    };
    return {
      onSwiper,
      modules: [Navigation],
    };
  },
};
</script>

<style lang="stylus">
.reviews {
	margin-bottom: 35px;
	padding: 64px 0;
	&__header { padding-bottom: 32px; }
	&__title {
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
	}
	&__more{
		font-size: 15px;
		font-weight: 700;
		line-height: 17px;
		align-items: center;
		column-gap: 6px;
		&::after {
			content: '';
			width: 16px;
			height: 16px;
			background: url("/src/assets/img/icons/arrow.png") center no-repeat;
		}
	}
	&__slider{
		position: relative;
		&::before, &::after{
			content: '';
			position: absolute;
			z-index: 2;
			top: 0;
			width: 88px;
			height: 100%;
			background: url("/src/assets/img/icons/blur.svg") center no-repeat;
		}
		&::before{
			left: 0;
		}
		&::after{
			right: 0;
			transform: rotate(180deg);
		}
		.swiper-slide{
			flex-shrink: 0;
			display: flex;
			justify-content: center;
		}
		.swiper{
			display: flex;
			align-items: center;
		}
		.swiper-wrapper {
			display: flex;
			max-width: 1170px;
		}
		.swiper-button-prev,
		.swiper-button-next {
			position: absolute;
			width: 32px;
			height: 48px;
			display: flex;
			align-items: center;
			background: url("/src/assets/img/icons/reviews-slider-arrow.png") center no-repeat;
			background-color: #151515;
			border-radius: 0 8px 8px 0;
			z-index: 3;
			cursor: pointer;
		}
		.swiper-button-prev{
			left: 0;
		}
		.swiper-button-next{
			transform: rotate(180deg);
			right: 0;
		}
	}
}
</style>
