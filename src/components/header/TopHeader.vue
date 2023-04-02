<template>
  <div class="top-header">
    <div class="top-header__container _container">
      <div class="top-header__row _flex">
        <div class="top-header__contact contact-header _flex">
          <span class="top-header__label _label-item _text-nowrap"
            >Chat with us</span
          >
          <a
            href="tel=+420336775664"
            class="contact-header__phone top-header__label _text-nowrap"
          >
            +420 336 775 664
          </a>
          <a
            href="mailto=info@freshnesecom.com"
            class="contact-header__mail top-header__label"
          >
            info@freshnesecom.com
          </a>
        </div>
        <nav class="top-header__menu _flex">
          <router-link
            v-for="item in headerMenu"
            :key="item.id"
            :to="item.url"
            class="top-header__label _label-item _text-nowrap"
          >
            {{ item.name }}
          </router-link>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  props: {
    headerMenu: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
.top-header{
  &__row{
    justify-content: space-between;
    border-bottom: 1px solid rgba(21, 21, 21, 0.2);
    padding: 16px 0;
		column-gap: 32px;
		row-gap: 16px;
  }
  &__contact{
   a {color: #151515;}
		flex-wrap: wrap;
		column-gap: 35px;
		row-gap: 15px;
  }
  &__label{
    font-size: 12px;
    line-height: 16px;
  }
	&__menu{
		flex-wrap: wrap;
		column-gap: 35px;
		row-gap: 15px;
	}
}
@media(max-width: 678px){
	.top-header{
		&__row,
		&__contact,
		&__menu{
			flex-direction: column;
		}
		&__contact{
			span{
				font-size: 24px
				margin-bottom: 10px;
			}
			a{
				font-size: 16px
			}
			padding-bottom: 16px;
			border-bottom: 1px solid rgba(21,21,21,0.2);
		}
		&__menu{
			a{
				font-size: 20px;
			}
		}
	}
}
</style>
