<template>
  <div class="banner__container _flex _f-dir-col">
    <div class="banner__titles _flex _f-dir-col">
      <div class="banner__subtitle _label-item">Banner subfocus</div>
      <div class="banner__title">Space for heading</div>
    </div>
    <router-link to="/recepies" class="banner__button"
      >Read recepies</router-link
    >
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style lang="stylus">
@media(max-width: 910px) {
	.banner{
		flex-wrap: wrap;
		&__container{
			flex-basis: 100%;
		}
	}
}
.banner {
	gap: 32px;
	height: 100%
	&__container{
		border-radius: 12px;
		flex: 1 1 50%;
		padding: 42px 32px;
		row-gap: 32px;
		justify-content: space-between;
		background: url("/src/assets/img/home/banner-bg.png");
		background-color: #F4F8EC;
	}
	&__titles{
		gap: 8px;
	}
	&__title{
		font-size: 22px;
		font-weight: 600;
		line-height: 24px;
	}
	&__subtitle{
		font-size: 12px;
		font-weight: 600;
	}
	&__button{
		border-radius: 12px;
		width: fit-content;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 15px;
		font-weight: 700;
		padding: 12px 16px;
		border: 2px solid #92C064;
		&::after{
			content: '';
			width: 16px;
			height: 16px;
			background: url("/src/assets/img/icons/arrow.png") center no-repeat;
		}
	}
}
</style>
