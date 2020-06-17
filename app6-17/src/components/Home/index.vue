<template>
  <div class="index-box">
    <div class="index-banner">
      <div class="banner-title w1200">
        <div class="title-word">新：平衡板</div>
        <a class="a-btn scop">现在去购物</a>
      </div>
    </div>
    <div class="index-carsoul">
      <div class="btn-nav">
        <a class="el-icon-arrow-left"></a>
        <a class="el-icon-arrow-right"></a>
      </div>
      <div class="right-desc">
        <div class="num">3-3</div>
        <div class="desc-title">迷你G</div>
        <div class="desc">大师大框架哈萨克巨大的</div>
        <a class="a-btn">立即购买</a>
        <a class="a-btn a-btn-white">查看限量版</a>
      </div>
      <div class="big-img">
        <img src="//cdn.shopify.com/s/files/1/1203/3194/files/TimeRemnant_Top-Home.png?v=1565709862" alt="">
      </div>
    </div>
    <div class="designer-info">
      <div class="designer-desc">
        <div class="designer-desc-title fc-fff f-size-32">设计师</div>
        <div class="designer-desc-detail fc-fff">
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
        </div>
        <a class="a-btn a-btn-white none">遇见熊</a>
      </div>
      <div class="right-video">
        <video loop controls src="https://cdn.shopify.com/s/files/1/1203/3194/files/MeetBear.mp4?17088" class="video-steam" poster="//cdn.shopify.com/s/files/1/1203/3194/files/Screen_Shot_2019-05-03_at_9.28.13_AM.png?v=1556893708"></video>
        <div class="play-btn bg-fff">
          <span class="el-icon-caret-right"></span>
        </div>
      </div>
      <div class="sign">
        <div class="sign-frame">
          <div class="tips">首先获取投放日期。</div>
          <span class="el-icon-arrow-right icon-sign"></span>
          <input type="email" placeholder="在此处输入电子邮件...">
          <a class="a-btn a-sign">注册</a>
        </div>
      </div>
    </div>
    <div class="make-bar">
      <div class="designer-desc">
        <div class="designer-desc-title fc-242424 f-size-32">设计师</div>
        <div class="designer-desc-detail fc-242424">
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
          我在克莱姆森大学（Clemson University）大四时就开始为图形设计项目设计滑板。
        </div>
        <a class="a-btn">学到更多</a>
      </div>
      <div class="right-video">
        <video loop controls src="https://cdn.shopify.com/s/files/1/1203/3194/files/MeetBear.mp4?17088" class="video-steam" poster="//cdn.shopify.com/s/files/1/1203/3194/files/Screen_Shot_2019-05-03_at_9.28.13_AM.png?v=1556893708"></video>
        <div class="play-btn bg-5d6ac4">
          <span class="el-icon-caret-right"></span>
        </div>
      </div>
    </div>
    <div class="shop-sort">
      <div class="shop-theme">店铺分类</div>
      <div class="shop-list">
        <div class="sort-list">
          <div class="sort-goods">
            <img src="//cdn.shopify.com/s/files/1/1203/3194/collections/limited_1024x1024.jpg?v=1557336312" alt="">
          </div>
          <div class="sort-title">服饰</div>
          <div class="center abtn">
            <a>现在去购物</a>
          </div>
        </div>
        <div class="sort-list">
          <div class="sort-goods">
            <img src="//cdn.shopify.com/s/files/1/1203/3194/collections/limited_1024x1024.jpg?v=1557336312" alt="">
          </div>
          <div class="sort-title">服饰</div>
          <div class="center abtn">
            <a>现在去购物</a>
          </div>
        </div>
        <div class="sort-list">
          <div class="sort-goods">
            <img src="//cdn.shopify.com/s/files/1/1203/3194/collections/limited_1024x1024.jpg?v=1557336312" alt="">
          </div>
          <div class="sort-title">服饰</div>
          <div class="center abtn">
            <a>现在去购物</a>
          </div>
        </div>
        <div class="sort-list">
          <div class="sort-goods">
            <img src="//cdn.shopify.com/s/files/1/1203/3194/collections/limited_1024x1024.jpg?v=1557336312" alt="">
          </div>
          <div class="sort-title">服饰</div>
          <div class="center abtn">
            <a>现在去购物</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '~@/static/common/style.less';
.shop-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.abtn {
  margin-bottom: 50px;
}
.sort-title {
  text-align: center;
  margin: 30px 0 10px 0;
}
.sort-goods {
  width: 100%;
  height: 373px;
}
.sort-list {
  width: 371px;
}
.sort-goods img {
  max-width: 373px;
}
.shop-theme {
  font-size: 35px;
  margin-bottom: 75px;
}
.shop-sort {
  background-color: #ffffff;
  padding: 0 84px;
}
.make-bar {
  background-color: #ffffff;
  padding: 110px 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-around;
}
[type="email"] {
  padding-left: 20px;
  width: 552px;
  height: 41px;
  background-color: #f4f4f4;
  outline: none;
  border: none;
}
.a-btn.a-sign {
  margin-left: 15px;
  margin-top: 0;
}
.sign-frame .icon-sign {
  margin: 0 20px;
}
.sign-frame {
  display: flex;
  align-items: center;
}
.sign-frame .tips {
  font-size: 14px;
}
.sign {
  padding: 52px 135px;
  position: absolute;
  bottom: -68px;
  background-color: white;
  box-shadow: 0px -5px 45px -12px #969595;
}
.play-btn {
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  left: 30px;
  width: 127px;
  height: 127px;
  border-radius: 50%;
  text-align: center;
  line-height: 127px;
}
.index-box {
  padding: 146px 0 45px 0;
}
.index-banner {
  padding: 100px 0;
  background: url(//cdn.shopify.com/s/files/1/1203/3194/files/BW-balance-01.jpg?v=1588868707);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 410px;
  padding-top: 130px;
}
.title-word {
  color: white;
  .fz(43px)
}

.index-carsoul {
  z-index: 5;
  position: relative;
  padding: 40px 20px 0;
  height: 506px;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
}
.big-img {
  width: 860px;
  height: 860px;
  position: absolute;
  top: -180px;
  left: 0;
}
.big-img img {
  width: 860px;
  min-height: 860px;
}
.right-desc {
  width: 456px;
}
.btn-nav {
  z-index: 10;
  position: absolute;
  left: 80px;
}
.btn-nav a {
  margin: 0 15px;
}
.el-icon-arrow-left::before, .el-icon-arrow-right::before {
  .fz(20px);
  font-weight: 650;
}
.right-desc {
  margin: 40px 0 50px 0;
  padding-left: 52px;
}
.desc-title {
  .fz(53px);
  margin: 10px 0 25px 0;
}
.desc {
  margin: 10px 0px;
}
.a-btn.scop {
  width: 180px;
}
.a-btn-white {
  background: white;
  color: #5d6ac4;
  border: 1px solid #5d6ac4;
}
.right-desc .a-btn-white {
  margin-left: 30px;
}
.designer-info {
  margin-bottom: 110px;
  position: relative;
  padding: 145px 0 165px 0;
  background-color: #242428;
}
.a-btn.a-btn-white.none {
  border: none;
}
.designer-desc {
  padding-right: 140px;
  width: 505px;
}
.designer-info {
  display: flex;
  justify-content: space-around;
}
.designer-desc-title {
  margin-bottom: 25px;
  .fz(32px)
}
.designer-desc-detail {
  margin-bottom: 40px;
}
.right-video {
  position: relative;
  width: 670px;
  height: 376px;
}
.video-steam {
  cursor: pointer;
  max-width: 553px;
}
</style>
