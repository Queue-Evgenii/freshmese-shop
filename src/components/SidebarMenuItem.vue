<template>
  <div class="menu-item-name">Category menu</div>
  <ul class="list">
    <li class="menu-list-item"><a href="#">Bakery</a></li>
    <li class="menu-list-item"><a href="#">Fruit and vegetables</a></li>
    <li class="menu-list-item"><a href="#">Meat and fish</a></li>
    <li class="menu-list-item"><a href="#">Drinks</a></li>
    <li class="menu-list-item"><a href="#">Kitchen</a></li>
  </ul>
  <a href="#" class="more">more</a>
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
</style>
