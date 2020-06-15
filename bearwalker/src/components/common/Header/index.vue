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
          <router-link to="/"><div class="nav-title">家</div></router-link>
          <div class="shop select-li nav-title">
            <router-link to="/shop"><span>店铺</span></router-link>
            <span class="el-icon-caret-bottom"></span>
            <div class="pop-frame">
              <div class="sort-nav">限量版主板</div>
              <div class="sort-nav">平衡板</div>
              <div class="sort-nav">配饰</div>
              <div class="sort-nav">服饰</div>
            </div>
          </div>
          <router-link to="/makeself"><div class="nav-title">自订</div></router-link>
          <router-link to='/news'><div class="nav-title">公布新闻</div></router-link>
          <div class="about select-li nav-title">
            <router-link to="/about"><span>关于我们</span></router-link>
            <span class="el-icon-caret-bottom"></span>
            <div class="pop-frame">
              <div class="sort-nav">限量版主板</div>
              <div class="sort-nav">平衡板</div>
              <div class="sort-nav">配饰</div>
              <div class="sort-nav">服饰</div>
            </div>
          </div>
          <div class="user-operate nav-title">
            <div class="login">
              <router-link to="/login"><a>登录</a></router-link>
              <span>/</span>
              <router-link to="/register"><a>注册</a></router-link>
            </div>
            <div class="operate-icon">
              <router-link to="/cart"><i class="el-icon-shopping-cart-full"></i></router-link>
              <i class="el-icon-search"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '~@/static/common/style.less';
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
