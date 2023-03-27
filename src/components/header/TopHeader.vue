<template>
  <div class="top-header">
    <div class="top-header__container _container">
      <div class="top-header__row _flex _p-16">
        <div class="top-header__contact contact-header _flex _gap-35">
          <span class="top-header__label _label-item">Chat with us</span>
          <a
            href="tel=+420336775664"
            class="contact-header__phone top-header__label"
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
        <nav class="top-header__menu _flex _gap-35">
          <router-link
            v-for="item in headerMenu"
            :key="item.id"
            :to="item.url"
            class="top-header__label _label-item"
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
  }
  &__contact{
   a {color: #151515;}
  }
  &__label{
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
