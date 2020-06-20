<template>
  <div class="header">
    <div class="recom">
      <p>NBA系列即将推出</p>
    </div>
    <div class="top-bar">
      <div class="w1200 imgbox">
        <div class="imgbar">
          <div class="toper-logo">
            <img src="http://cdn.shopify.com/s/files/1/1203/3194/t/14/assets/logo.png?v=10393740045389715064" alt="">
          </div>
        </div>
        <div class="topright">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1"><router-link class="header-nav-title" to="/">家</router-link></el-menu-item>
            <el-submenu index="2">
              <template slot="title"><router-link class="header-nav-title" to="/shop">店铺</router-link></template>
              <el-menu-item index="2-1"><router-link to="/limited" class="nav-second-title"><span>限量版主板</span></router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link to="/general" class="nav-second-title"><span>平衡板</span></router-link></el-menu-item>
              <el-menu-item index="2-3"><router-link to="/accessories" class="nav-second-title"><span>配饰</span></router-link></el-menu-item>
              <el-menu-item index="2-4"><router-link to="/cloth" class="nav-second-title"><span>服饰</span></router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><router-link to="/makeself" class="header-nav-title">自订</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to='/news' class="header-nav-title">公布新闻</router-link></el-menu-item>
            <el-submenu index="5">
              <template slot="title"><router-link to="/about" class="header-nav-title">关于我们</router-link></template>
              <el-menu-item index="5-1"><router-link to="/about/ambassador" class="nav-second-title">品牌大使</router-link></el-menu-item>
              <el-menu-item index="5-2"><router-link to="/about/aboutbear" class="nav-second-title">遇见熊</router-link></el-menu-item>
              <el-menu-item index="5-3"><router-link to="/about/contact" class="nav-second-title">联系</router-link></el-menu-item>
            </el-submenu>
          </el-menu>
            <div class="login">
              <router-link class="header-nav-title" to="/login">登录</router-link>
              <span>/</span>
              <router-link class="header-nav-title" to="/register">注册</router-link>
            </div>
            <div class="operate-icon">
              <router-link to="/cart" class="header-nav-title">
                <el-badge :value="3" class="item">
                  <i class="el-icon-shopping-cart-full"></i>
                </el-badge>
              </router-link>
              <router-link to="/search" class="header-nav-title"><i class="el-icon-search"></i></router-link>
            </div>
<!--          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/common/style.less';
.nav-second-title:hover {
  color: #5d6ac4;
}
.nav-second-title {
  display: block;
}
.nav-second-title {
  text-decoration: none;
}
.header-nav-title, .nav-second-title {
  text-decoration: none;
  color: #000000;
}
.header-nav-title:hover {
  color: #5d6ac4;
}
.header {
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.recom {
  background-color: #242428;
  text-align: center;
  height: 46px;
  line-height: 46px;
  .fz(16px);
  color:#ffffff
}
.top-bar {
  background-color: white;
  height: 100px;
}
.imgbox{
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.imgbar {
  display: flex;
  align-items: center;
  width: 50%;
}
.toper-logo {
  .size(190px, 56px);
  font-size: 0;
}
.toper-logo img {
  .max-img();
}
.topright {
  .fz(12px);
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
}
.user-operate {
  justify-content: space-between;
  display: flex;
}
.el-icon-shopping-cart-full::before, .el-icon-search::before {
  .fz(16px);
  font-weight: 650;
}
.operate-icon {
  margin-left: 40px;
}
.operate-icon i {
  margin: 0 10px;
}
.login span {
  margin:0 5px;
  font-weight: 650;
}
.select-li {
  position: relative;
}
.select-li:hover .pop-frame {
  display: block;
}
.pop-frame {
  .fz(12px);
  position: absolute;
  left: -38px;
  top: 58px;
  display: none;
}
.pop-frame .sort-nav {
  padding-left: 20px;
  width: 180px;
  height: 48px;
  line-height: 48px;
  background-color: #c1c1c1;
  border-bottom: 1px solid white;
}
.nav-title .sort-nav:last-child {
  border: none;
}
</style>
<style lang="less">
.topright .el-menu--horizontal > .el-menu-item {
  color: #000000;
  border: none;
 }
 .topright .el-menu--horizontal > .el-menu-item:hover {
  color: #5d6ac4;
 }
.topright .el-menu.el-menu--horizontal {
  border: none;
}
</style>
