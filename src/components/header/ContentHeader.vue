<template>
  <div class="content-header">
    <div class="content-header__container _container">
      <div class="content-header__row _flex">
        <router-link to="/" class="content-header__logo">
          <img src="@/assets/img/freshenese.png" alt="" />
        </router-link>
        <SearchHeader class="content-header__search" />
        <div class="content-header__actions actions-header _flex">
          <div class="actions-header__item">
            <router-link to="/">
              <img src="@/assets/img/icons/account.png" alt="" />
            </router-link>
          </div>
          <div @click="openCart()" class="actions-header__item">
            <span>0</span>
            <button>
              <img src="@/assets/img/icons/cart.png" alt="" />
            </button>
          </div>
          <div
            v-if="windowWidth <= 678"
            :class="isBurgerOpen ? '_active' : ''"
            class="actions-header__burger burger-header"
          >
            <div
              @click="isBurgerOpen = !isBurgerOpen"
              class="burger-header__icon"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="burger-header__body">
              <top-header :headerMenu="headerMenu" />
              <bottom-header />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from "@/components/header/SearchHeader.vue";
import TopHeader from "@/components/header/TopHeader.vue";
import BottomHeader from "@/components/header/BottomHeader.vue";

export default {
  name: "ContentHeader",
  components: {
    BottomHeader,
    TopHeader,
    SearchHeader,
  },
  props: {
    windowWidth: {
      type: Number,
    },
    headerMenu: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isBurgerOpen: false,
    };
  },
  methods: {
    openCart() {
      this.$emit("openCart");
    },
  },
};
</script>

<style lang="stylus">
@media(max-width: 678px) {
  .content-header{
    &__row{
      flex-wrap: wrap;
			padding: 20px 0 !important;
    }
    &__search{
      order 2;
      flex: 1 1 100% !important;
    }
    &__logo{
       order 0;
    }
    &__actions{
       order 1;
    }
  }
}
@media(max-width: 420px) {
	.content-header{
		&__actions{
			flex: 1 1 100% !important;
		}
		&__logo{
			margin: 0 auto
		}
	}
}
.burger-header{
	&__icon{
		position: relative;
		cursor pointer;
		width: 18px;
		height: 18px
		span{
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #151515;
			transition transform 0.3s ease 0s;
		}
		span:nth-child(2){
			transform: scale(1);
			top: 8px;
		}
		span:first-child{
			top: 2px;
		}
		span:last-child{
			bottom: 02px;
		}
	}
	&__body{
		position: absolute;
		z-index:3;
		top: 0;
		left: 0;
		width: 85%
		height: 100%
		background-color: #F4F8EC;
		transform: translate(-100%);
		transition: transform 0.3s ease 0s;
	}
}
.burger-header._active{
	.burger-header__icon{
		span:nth-child(2){
			transform: scale(0);
		}
		span:first-child{
			transform: rotate(45deg);
			top: 9px;
		}
		span:last-child{
			transform: rotate(-45deg);
			top: 9px;
		}
	}
	.burger-header__body{
		transform: translate(0);
	}
}
.content-header{
  &__row{
     padding: 40px 0;
     align-items: center;
     justify-content: space-between;
     gap: 25px
  }
  &__logo{
    flex: 0 0 175px
    width: 175px;
    height: 20px;
    position: relative;
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__search{
    flex: 0 1 500px;
  }
  &__actions{
    flex: 0 1 80px;
  }
}
.actions-header{
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  &__item{
   position: relative;
    img{
      width: 20px;
    }
    span{
      position: absolute;
      bottom: -8px;
      left: -5px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 16px;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: #FFFFFF;
      background: #E6704B;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
    }
  }
}
</style>
