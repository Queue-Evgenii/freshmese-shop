<template>
  <div class="search-header _flex">
    <div class="search-header__categories _flex">
      <span>Categories</span>
      <img src="@/assets/img/icons/arrow.png" alt="" />
    </div>
    <div class="search-header__input _flex">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Products, categories ..."
      />
      <img src="@/assets/img/icons/search.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
};
</script>

<style lang="stylus">
.search-header{
  padding: 10px 16px;
  background: #F9F9F9;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  align-items: center;
  justify-content: space-between;
  &__categories{
     border-right: 1px solid #D1D1D1;
     font-weight: 700;
     font-size: 15px;
     line-height: 22px;
     color: #151515;
     align-items: center;
     column-gap: 12px;
     padding-right: 30px
    img{
      transform: rotate(90deg);
      width: 7px;
      flex: 0 0 7px;
    }
  }
  &__input{
   flex: 0 1 330px;
   padding-left: 18px;
   align-items: center;
    input {
      padding: 0 5px;
      flex: 1 1 auto;
      min-width: 150px;
      background-color: transparent;
    }
  }
}
</style>
