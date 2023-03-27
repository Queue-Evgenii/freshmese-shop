<template>
  <div class="menu-item-name">Category menu</div>
  <ul class="list">
    <li class="menu-list-item"><a href="#">Bakery</a></li>
    <li class="menu-list-item"><a href="#">Fruit and vegetables</a></li>
    <li class="menu-list-item"><a href="#">Meat and fish</a></li>
    <li class="menu-list-item"><a href="#">Drinks</a></li>
    <li class="menu-list-item"><a href="#">Kitchen</a></li>
  </ul>
  <div class="more-wrapper">
    <a href="#" class="more">More categories</a>
  </div>
</template>

<script>
export default {
  name: "SidebarMenuItem",
};
</script>

<style lang="stylus">
.menu-item-name {
  color: #151515;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 15px;
}
.list {
  margin-bottom: 38px;
}
.list .menu-list-item {
  margin-bottom: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
}
.list .menu-list-item:last-child {
  margin-bottom: 0;
}
.list .menu-list-item a {
  text-decoration: underline;
  color: #6A983C;
}
.more-wrapper {
  padding: 15px;
  background: #f5f5f5;
  max-width: 180px;
}
.more-wrapper a {
  font-style: normal;
  font-size: 15px;
  line-height: 22px;
  font-weight: 700;
  color: #151515;
  display: block;
  background: url("@/assets/img/icons/arrow.png") no-repeat 130px 6px;
}
</style>
