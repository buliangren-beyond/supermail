<template>
  <div id="home">
    <nav-bar class="navStyle"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-home></feature-home>
    <tabbar-control class="tabbarcontrol" :titles="['流行','新歌','精选']"></tabbar-control>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childrenComps/HomeSwiper";
  import RecommendView from "./childrenComps/RecommendView";
  import FeatureHome from "./childrenComps/FeatureHome";

  import TabbarControl from "../../components/content/tabbarControl/TabbarControl";

  import {getHomeMultidata,getHomeGoods} from "network/home";
  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureHome,
      TabbarControl,

      getHomeMultidata,
      getHomeGoods
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []},

        }
      }
    },
    created() {
      this.getHomeMD()
      this.getHomeG("pop")
    },
    methods: {
      getHomeMD() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      getHomeG(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {

          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .navStyle {
    background: pink;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 7;
  }
  .tabbarcontrol {
    position: sticky;
    top: 44px;
  }
</style>
