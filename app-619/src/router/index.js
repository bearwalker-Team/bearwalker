import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import makeSelf from '../components/makeSelf'
import News from '../components/news'
import Shop from '../components/Shop'
import Login from '../components/login'
import Register from '../components/register'
import About from '../components/About'
import Cart from '../components/cart'
import Ambassador from '../components/About/Ambassador'
import Aboutbear from '../components/About/Aboutbear'
import Contact from '../components/About/Contact'
import Return from '../components/Return'
import Service from '../components/Service'
import Checkout from '../components/Checkout'
import Cloth from '../components/Shop/ShopGoods/cloth'
import General from '../components/Shop/ShopGoods/general'
import Limit from '../components/Shop/ShopGoods/limited'
import Accessories from '../components/Shop/ShopGoods/accessories'
import Parts from '../components/Shop/DetailPage/parts-detail'
import limitedD from '../components/Shop/DetailPage/limited-detail'
import Search from '../components/Search'
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
}, {
  path: '/about/ambassador',
  component: Ambassador
}, {
  path: '/about/aboutbear',
  component: Aboutbear
}, {
  path: '/about/contact',
  component: Contact
}, {
  path: '/return',
  component: Return
}, {
  path: '/service',
  component: Service
}, {
  path: '/checkout',
  component: Checkout
}, {
  path: '/limited',
  component: Limit
}, {
  path: '/general',
  component: General
}, {
  path: '/cloth',
  component: Cloth
}, {
  path: '/accessories',
  component: Accessories
}, {
  path: '/parts',
  component: Parts
}, {
  path: '/limited-detail',
  component: limitedD
}, {
  path: '/search',
  component: Search
}]
export default new VueRouter({
  routes
})
