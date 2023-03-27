<template>
  <div class="content-header">
    <div class="content-header__container _container">
      <div class="content-header__row _flex">
        <div class="content-header__items content-header__logo">
          <img src="@/assets/img/freshenese.png" alt="" />
        </div>
        <SearchHeader class="content-header__items content-header__search" />
        <div class="content-header__items content-header__actions"></div>
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
    flex: 0 0 100px;
  }
}
</style>
