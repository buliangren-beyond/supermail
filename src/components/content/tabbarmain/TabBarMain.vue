<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="icon" src="~assets/img/tabbar/all.svg" alt="">
      <img slot="icon-active" src="~assets/img/tabbar/all_active.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="icon-active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/man">
      <img slot="icon" src="~assets/img/tabbar/bussiness-man.svg" alt="">
      <img slot="icon-active" src="~assets/img/tabbar/bussiness_active-man.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import TabBarItem from "../../common/tabbar/TabBarItem";

    export default {
        name: "TabBarMain",
      components: {
        TabBar,
        TabBarItem
      }
    }
</script>

<style scoped>

</style>
