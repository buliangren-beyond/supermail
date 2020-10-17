import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home/Home';
import Category from "../views/Catagory/Category";
import Cart from "../views/Cart/Cart";
import Man from "../views/Man/Man";

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },{
    path: '/cart',
    component: Cart
  },{
    path: '/man',
    component: Man
  },
]

const route = new Router({
  routes,
  mode: 'history'
})

export default route
