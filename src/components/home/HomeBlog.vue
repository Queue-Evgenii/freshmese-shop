<template>
  <div class="blog-wrapper _flex">
    <div class="blog-wrapper__big-blog">
      <BlogItem class="big-blog" />
    </div>
    <div class="blog-wrapper__single">
      <BlogItem />
    </div>
    <div class="blog-wrapper__multi _flex _f-dir-col">
      <BlogItem class="inline-blog" />
      <BlogItem class="inline-blog" />
      <BlogItem class="inline-blog" />
    </div>
  </div>
</template>

<script>
import BlogItem from "@/components/content/BlogItem.vue";
export default {
  name: "HomeBlog",
  components: {
    BlogItem,
  },
};
</script>

<style lang="stylus">
.blog-wrapper{
	padding: 64px 0;
	gap: 32px;
	&__big-blog{
		flex: 0 1 400px;
	}
	&__single {
		flex: 0 1 269px;
	}
	&__multi {
		flex: 0 1 369px;
		gap: 32px;
	}
}
.inline-blog{
	&.blog{
		flex-direction: row-reverse;
		column-gap: 16px;
	}
	.blog__mark {
		display: none;
	}
	.blog__image{
		max-width: 96px;
		flex: 0 0 96px;
		max-height: 96px;
	}
	.blog__title{ padding-top: 0;}
}
.big-blog{
	&.blog{
		position: relative;
		row-gap: 0;
		&:hover { .blog__image img { opacity: 0.5; } }
	}
	.blog__image{
		max-width: 469px;
		height: 100%;
	}
	.blog__text-wrapper { }
	.blog__mark {
		position: absolute;
		top: 6%;
	}
	.blog__mark, .blog__title, .post-data { left: 5.1%; right: 5.1%; }
	.blog__title, .post-data { color: #fff; }
	.blog__title{
		position: absolute;
		bottom: 16%;
	}
	.post-data{
		position: absolute;
		bottom: 6%;
		&__author{
			img {
				display: block;
			}
		}
	}
}
@media(max-width: 1024px) {
	.blog-wrapper{
		&__big-blog{
			flex: 1 0 369px;
		}
		&__single {
			display: none;
		}
		&__multi {
			flex: 0 1 100%;
		}
	}
	.blog__image{
		max-width: 100%;
	}
}
@media(max-width: 768px) {
	.blog-wrapper{
		flex-wrap: wrap;
		&__big-blog{
			flex: 1 1 100%;
		}
		&__multi {
			flex: 0 1 100%;
		}
	}
	.big-blog{
		.blog__image{
			max-width: 100%;
			height: 269px;
		}
	}
}
</style>
