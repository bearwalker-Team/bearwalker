import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import makeSelf from '../components/makeSelf'
import News from '../components/news'
import Shop from '../components/shop'
import Login from '../components/login'
import Register from '../components/register'
import About from '../components/About'
import Cart from '../components/cart'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/makeself',
  component: makeSelf
}, {
  path: '/news',
  component: News
}, {
  path: '/shop',
  component: Shop
}, {
  path: '/login',
  component: Login
}, {
  path: '/register',
  component: Register
}, {
  path: '/about',
  component: About
}, {
  path: '/cart',
  component: Cart
}]
export default new VueRouter({
  routes
})
