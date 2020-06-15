<template>
  <div class="w1200">
    <div class="zt">店铺<span>-</span>Hyberium 65mm血统</div>
    <div>
        <div class="detail-box">
          <div class="goods-box">
            <div class="goods-t">
              <a class="el-icon-arrow-left"></a>
              <img src="//cdn.shopify.com/s/files/1/1203/3194/products/Blood_Lines_large.jpg?v=1556912814"/>
              <a class="el-icon-arrow-right"></a>
            </div>
            <ul class="goods-list-b">
              <li class="g-l-box"><img class="l-img active"  src="//cdn.shopify.com/s/files/1/1203/3194/products/Blood_Lines_large.jpg?v=1556912814"/></li>
              <li class="g-l-box"><img class="l-img" src="//cdn.shopify.com/s/files/1/1203/3194/products/Blood_Lines_large.jpg?v=1556912814"/></li>
              <li class="g-l-box"><img class="l-img" src="//cdn.shopify.com/s/files/1/1203/3194/products/Blood_Lines_large.jpg?v=1556912814"/></li>
              <li class="g-l-box"><img class="l-img" src="//cdn.shopify.com/s/files/1/1203/3194/products/Blood_Lines_large.jpg?v=1556912814"/></li>
              <li class="g-l-box"><img class="l-img" src="//cdn.shopify.com/s/files/1/1203/3194/products/Blood_Lines_large.jpg?v=1556912814"/></li>
            </ul>
          </div>
          <div class="text-detail">
            <p class=" annotation">该商品可购买</p>
            <div class="goods-name">
              <a>Hyberium 65mm</a>
              <p>血统</p>
            </div>
            <div class="goods-x">
              <a>Hyberium高级滑行轮可让您自由骑行，下坡和平稳巡航。</a>
              <p>65毫米80a</p>
            </div>
            <div class="number-ipt">
              <p>数量</p>
              <input/>
            </div>
            <div class="pay">
              <button>立即购买</button>
              <p>$48.00</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="less">
 @import '~@/static/common/style.less';
.zt {
    .fz(16px);
    span {
      margin: 0 15px;
    };
    margin-bottom: 20px;
    }
.goods-box{
  width: 574px;
  height: 480px;
  position: relative;
  }
  .goods-t img {
    width:480px;
    height: 480px;
    margin-left: 47px;
  }
  .el-icon-arrow-left{
    .fz(20px);
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 0;
  }
  .el-icon-arrow-right{
    .fz(20px);
    font-weight: bold;
    position: absolute;
    top: 50%;
    right: 0;
  }
.detail-box{
  display: flex;
  justify-content: space-between;
}
.goods-list-b{
   display: flex;
  justify-content: space-between;
  height: 46px;
  margin-top: 26px;
  margin: 0 47px;
  line-height: 47px;
 .g-l-box{
    width: 46px;
    height: 46px;
    .l-img{
      width: 100%;
      height: 100%;
    }
  }
}
.g-l-box .l-img.active{
  border: 4px solid #5d6ac4;;
}
.text-detail {
  width: 482px;
  height:556px ;
}
// right
 .annotation {
   .fz(12px);
   color: #84C45D;
   margin-bottom: 10px;
 }
.goods-name{
  .fz(53px);
  font-weight:bolder;
}
.goods-x{
  .fz(14);
  color: gray;
  margin-top: 10px;
  margin-bottom: 20px;
  a{
    display: block;
    width: 100%;
    height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }
}
.number-ipt {
  margin: 15px 0;
  p {
    .fz(14px);
    margin-bottom: 5px;
  }
  input {
    width: 209px;
    height: 45px;
    padding: 0 15px;
    border: 1px solid black;
  }
}
.pay {
  display: flex;
  justify-content: space-between;
  button {
    width: 130px;
    height: 43px;
    background: #5d6ac4;
    color: #ffffff;
    border: 0;
    margin-top: 80px;
  }
  p{
     font-weight: bolder;
     .fz(35px);
     margin-top: 80px;
  }
}
.pay button:hover{
  border: 1px solid #5d6ac4;
  background: #ffffff;
  color: #5d6ac4;
}
</style>
