<template>
  <section class="review-slide _flex _f-dir-col">
    <p class="review-slide__text">
      “ This is an super space for your customers qoute. Don’t worry it works
      smooth as pie. You will get all what you need by writiing a text here “
    </p>
    <h4 class="review-slide__name">Name and Surname</h4>
    <div class="review-slide__logo">
      <img src="https://loremflickr.com/360/360" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  name: "ReviewComponent",
};
</script>

<style lang="stylus">
.review-slide {
	padding: 32px 24px 40px;
	row-gap: 24px;
	border-radius: 12px;
	border: 1px solid #F1F1F1;
	position: relative;
	align-items: center;
	&__text, &__name { text-align: center; }
	&__name {
		font-size: 12px;
		line-height: 14px;
		font-weight: 600;
		color: #A9A9A9;
	}
	&__text {
		font-weight: 500;
		font-size: 15px;
		line-height: 18px;
	}
	&__logo{
		position: absolute;
		bottom: -24px;
		max-width: 48px;
		max-height: 48px;
		border-radius: 48px;
		overflow: hidden;
		img{
			width: 100%;
			height: 100%;
		}
	}
}
</style>
