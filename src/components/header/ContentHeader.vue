<template>
  <div class="content-header">
    <div class="content-header__container _container">
      <div class="content-header__row _flex">
        <div class="content-header__logo">
          <img src="@/assets/img/freshenese.png" alt="" />
        </div>
        <SearchHeader class="content-header__search" />
        <div class="content-header__actions actions-header _flex">
          <div class="actions-header__item">
            <router-link to="/">
              <img src="@/assets/img/icons/account.png" alt="" />
            </router-link>
          </div>
          <div class="actions-header__item">
            <span>0</span>
            <router-link to="/">
              <img src="@/assets/img/icons/cart.png" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from "@/components/header/SearchHeader.vue";

export default {
  name: "ContentHeader",
  components: {
    SearchHeader,
  },
};
</script>

<style lang="stylus">
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
  column-gap: 14px;
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
