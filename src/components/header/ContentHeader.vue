<template>
  <div class="content-header">
    <div class="content-header__container _container">
      <div class="content-header__row _flex">
        <div class="content-header__items content-header__logo">
          <img src="@/assets/img/freshenese.png" alt="" />
        </div>
        <div class="content-header__items content-header__search"></div>
        <div class="content-header__items content-header__actions"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentHeader",
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
}
</style>
