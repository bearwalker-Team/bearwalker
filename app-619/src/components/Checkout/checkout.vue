<template>
  <div class="w1100 clearfix checkout-page">
    <div class="checkout-left">
      <a class="left-title">Bear Walker</a>
      <div class="left-nav">
        <a class="nav-cart">购物车</a>
        <span class="el-icon-arrow-right"></span> 信息
        <span class="el-icon-arrow-right"></span> 运输
        <span class="el-icon-arrow-right"></span> 付款
      </div>
      <el-form>
        <div class="form-info">
          <span class="info-title">联系信息</span>
          <span class="left-login">已经有账号了？<a>登录</a></span>
          <el-form-item>
            <el-input placeholder="电子邮箱"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="公司（可选）"></el-input>
          </el-form-item>
          <el-form-item>
            <el-select placeholder="省" />
          </el-form-item>
          <el-form-item>
            <el-input placeholder="邮政编码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="详细地址"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="电话"></el-input>
          </el-form-item>
          <el-checkbox checked="checked">
            让我随时了解新闻和独家优惠
          </el-checkbox>
        </div>
        <div class="form-address">
          <span class="info-title">收件地址</span>
          <el-form-item>
            <el-input placeholder="名字"></el-input>
          </el-form-item>
        </div>
        <div class="left-check">
          <a class="backcart"><span class="el-icon-arrow-left"></span>返回购物车</a>
          <a class="left-next">继续运送</a>
        </div>
      </el-form>
      <div class="left-bottom">
        <a>退款政策</a>
        <a>运输政策</a>
        <a>隐私政策</a>
        <a>服务条款</a>
      </div>
    </div>
    <div class="checkout-right">
      <div class="right-goods clearfix">
        <div class="right-goods-img fl">
          <img src="//cdn.shopify.com/s/files/1/1203/3194/products/Gustin_Short_Top_Deck_small.png?v=1556917838">
        </div>
        <div class="right-goods-title fl">
          <p class="title1">迷你G</p>
          <p class="title2">仅滑板/否</p>
        </div>
        <div class="right-goods-price fr">$ 48.00</div>
      </div>
      <div class="right-coupon">
        <el-input placeholder="优惠券"></el-input>
        <el-button>应用</el-button>
      </div>
      <div class="right-amount">
        <div class="amount-price clearfix">
          <span class="fl">小计</span>
          <span class="fr">$ 48.00</span>
        </div>
        <div class="amount-shipping clearfix">
          <div class="fl">运费<a class="el-icon-question"></a></div>
          <div class="fr">下一步计算</div>
        </div>
        <div class="amount-account clearfix">
          <span class="fl">总计</span>
          <span class="price fr">$ 48.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../static/common/login.less';
.checkout-page {
  padding: 146px 0 45px 0;
  display: flex;
}
.w1100 {
  .checkout-left {
      border-right: 1px solid #e6e6e6;
    width: 638px;
    padding: 56px 66px 0 0;
    .left-title {
      .fz(37px)
    }
    .left-nav {
      .fz(12px);
      .nav-cart {
        .color( #197bbd);
      }
      .el-icon-arrow-right {
        padding: 0 5px;
        font-weight: 700;
        .color(#737373)
      }
    }
    .form-info {
      margin: 25px 0;
      .left-login {
        padding-bottom: 10px;
        .fz(14px);
        .fr();
        a {
          .color(#197bbd)
        }
      }
    }
    .left-check {
      margin: 20px 0 56px 0;
      .fz(14px);
      .backcart {
        .color(#197bbd);
        line-height: 60px;
      }
      .left-next {
        display: inline-block;
        width: 105px;
        height: 60px;
        line-height: 60px;
        background: #197bbd;
        .color(#ffffff);
        text-align: center;
        border-radius: 5px;
      }
    }
    .left-bottom {
      .color(#197bbd);
      .fz(10px);
      padding: 14px 0;
      border-top: 1px solid #e6e6e6;
      a {
        margin-right: 15px;
      }
    }
  }
  .el-form-item {
    margin: 10px 0 !important
  }
  .info-title {
    display: inline-block;
    .fz(18px);
    margin-bottom: 10px;
  }
  .checkout-right {
    background-image: linear-gradient(#fafafa, #ffffff);
    width: 462px;
    padding: 56px 0 0 44px;
    .right-goods {
      padding-bottom: 15px;
      .right-goods-img {
        width: 64px;
        height: 64px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        img {
          width: 100%;
          height: 100%
        }
      }
      .right-goods-title {
        padding: 14px 0 0 14px;
        .title1 {
          .color(#323232);
          .fz(14px)
        }
        .title2 {
          .fz(10px);
          .color(#717171)
        }
      }
      .right-goods-price {
        padding-top: 14px;
        .fz(14px)
      }
    }
    .right-coupon {
      padding: 20px 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .el-input {
        width: 320px;
      }
      .el-button {
        background: #c8c8c8;
        margin-left: 15px;
        .color(#ffffff)
      }
    }
    .right-amount {
      .fz(14px);
      .color(#535353);
      padding: 21px 0;
      .amount-price {
        margin-bottom: 10px;
      }
      .amount-shipping {
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      .amount-account {
        padding-top: 15px;
        .fz(16px);
        .price {
          .fz(24px);
          font-weight: 500;
        }
      }
    }
  }
}
.left-check {
  display: flex;
  justify-content: space-between;
}

</style>
