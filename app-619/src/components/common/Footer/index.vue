<template>
  <div class='footer'>
    <div class=footer-nav>
      <div class="img-bar">
        <div class="footer-logo">
          <img src="http://cdn.shopify.com/s/files/1/1203/3194/t/14/assets/logo.png?v=10393740045389715064" alt="">
      </div>
      </div>
      <div class="footer-list">
        <ul class="footer-ul">
          <li>家</li>
          <li>店</li>
          <li>自订</li>
        </ul>
        <ul class="footer-ul">
          <li>品牌大使</li>
          <li>关于我们</li>
          <li>退货政策</li>
        </ul>
        <ul class="footer-ul">
          <li>服务条款</li>
          <li>限量板</li>
          <li>股票板</li>
        </ul>
        <ul class="footer-ul">
          <li>轮圈</li>
          <li>配饰</li>
          <li>板饰</li>
        </ul>
      </div>
    </div>
    <div class="footer-bar">
      <div class="w1200">
        <div class="bottom-left">
          <p><span>©2019贝尔沃克。</span><span>版权所有。</span></p>
        </div>
        <div class="bottom-right">
          <p><i class="el-icon-user-solid"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '~@/static/common/style.less';
.footer {
  background-color: white;
  width: 100%;
}
.footer-nav {
  border-top: 2px solid #e6e6e7;
  display: flex;
  .w1200;
  padding: 60px 0 50px 0;
  justify-content: space-between;
}
.img-bar {
  width: 50%;
}
.footer-logo {
  .size(190px, 56px)
}
.footer-logo img {
  .max-img()
}
.footer-list {
  justify-content: space-between;
  width: 50%;
  display: flex;
  padding: 0 30px;
  .fz(12px)
}
.footer-ul li {
  margin-bottom: 16px;
}
.footer-ul li:last-child {
  margin-bottom: 0;
}
.footer-bar {
  padding: 15px 0;
  background-color: #242428;
  .size(100%, 58px);
  color:white;
  .fz(14px)
}
.w1200 {
  display: flex;
  justify-content: space-between;
}
</style>
