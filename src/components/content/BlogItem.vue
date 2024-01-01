<template>
  <router-link to="/blog" class="blog">
    <div class="blog__image">
      <img src="https://loremflickr.com/640/640" alt="" />
    </div>
    <div class="blog__text-wrapper">
      <span class="blog__mark">Dinner tips</span>
      <div class="blog__title">
        Our chef tips for a great and tasty dinner ready in 20 minutes
      </div>
      <BlogPostData />
    </div>
  </router-link>
</template>

<script>
import BlogPostData from "@/components/content/BlogPostData.vue";
export default {
  name: "BigBlogItem",
  components: { BlogPostData },
};
</script>

<style lang="stylus">
.blog{
	display: flex;
	flex-direction: column;
	row-gap: 16px;
	justify-content: space-between;
	&__image{
		flex: 1 1 auto
		max-width: 269px;
		max-height: 100%;
		border-radius: 12px;
		overflow: hidden;
		background-color: #151515;
		&:hover { img { opacity: 0.5; } }
		img{
			width: 100%;
			height: 100%;
			object-fit: cover;
			transition: opacity 0.5s ease 0s;
		}
	}
	&__mark {
		width: fit-content;
		color: #6A983C;
		font-size: 12px
		font-weight: 600;
		line-height: 14px;
		padding: 0 8px;
		border-radius: 12px;
		background-color: #F4F8EC;
	}
	&__title{
		font-size: 18px;
		font-weight: 600;
		line-height: 20px;
		padding: 12px 0;
	}
}
.post-data{
	gap: 16px;
	&__author { gap: 8px; }
	&__logo{
		border-radius: 32px;
		display: none;
		height: 32px;
		width: 32px;
	}
	&__name,
	&__date {
		font-size: 12px
		line-height: 14px;
	}
}
</style>
