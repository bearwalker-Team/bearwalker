<template>
  <div class='limited-page'>
      <div class="w1200">
      <div>
          <div class="zt">店铺<span>-</span>限量版主板</div>
          <div class="shop-t">
              <a>我们的店铺</a>
              <p>购买我们全系列的木板，卡车，车轮和配件。</p>
          </div>
      </div>
      <div class="goods-l">
          <p class="title">配饰</p>
          <ul>
              <li class="container">
                  <router-link to="/limited-detail">
                    <div><img src="//cdn.shopify.com/s/files/1/1203/3194/products/IMG_9236_Trucks_CrossWide_large.png?v=1556894816"/></div>
                  </router-link>
                    <div class="text-c">
                      <p class="name">8.5英寸滑板支架</p>
                      <div class="text">我们的8.5英寸Gullwing卡车具有扩展的卵黄衬套座，可高度定制衬套设置；超高回弹衬套，可实现理想的响应性；通用的6孔底板，可调节轴距选项；内挂锁骨，可实现更平滑，更快的磨削。</div>
                      <div class="price">$48.00</div>
                    </div>
              </li>
              <li>
                  <img src="//cdn.shopify.com/s/files/1/1203/3194/products/IMG_9226_Wall-Mount_Detail3_large.png?v=1556919347"/>
                  <div class="text-c">
                      <p class="name">8.5英寸滑板支架</p>
                      <div class="text">我们的8.5英寸Gullwing卡车具有扩展的卵黄衬套座，可高度定制衬套设置；超高回弹衬套，可实现理想的响应性；通用的6孔底板，可调节轴距选项；内挂锁骨，可实现更平滑，更快的磨削。</div>
                      <div class="price">$48.00</div>
                    </div>
              </li>
              <li>
                  <img src="//cdn.shopify.com/s/files/1/1203/3194/products/IMG_9226_Wall-Mount_Detail3_large.png?v=1556919347"/>
                  <div class="text-c">
                      <p class="name">8.5英寸滑板支架</p>
                      <div class="text">我们的8.5英寸Gullwing卡车具有扩展的卵黄衬套座，可高度定制衬套设置；超高回弹衬套，可实现理想的响应性；通用的6孔底板，可调节轴距选项；内挂锁骨，可实现更平滑，更快的磨削。</div>
                      <div class="price">$48.00</div>
                    </div>
              </li>
          </ul>
      </div>
  </div>
</div>
</template>
<style lang="less" scoped>
  @import '~@/static/common/style.less';
  .limited-page {
    margin: 146px 0 45px 0;
    padding-top: 200px
  }
  .zt {
    .fz(16px);
    span {
      margin: 0 15px;
    };
    margin-bottom: 20px;
      };
  .shop-t {
     padding-top: 80px;
     a {
         .fz(52px);
         font-weight: bold;
     };
     p {
         .fz(18px);
         margin-top: 20px;
     }
  };
  .goods-l {
      margin-top: 80px;
     .title{
          .fz(34px);
          font-weight: bold;
          padding-bottom: 20px;
      }
  }
  ul {
      display: flex;
     justify-content: space-between;
  }
  li {
      img{
          width: 393px;
          height: 556px;
      }

      .text-c
          .text{
            .fz(14px);
            width: 390px;
            height: 19px;
            color: #928c8c;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
      }
      .name {
          .fz(22px);
          margin: 15px 0;
          font-weight: bold;
      }
      .price {
          .fz(35px);
          font-weight: bolder;
          margin: 15px 0;
      }
  }
</style>
