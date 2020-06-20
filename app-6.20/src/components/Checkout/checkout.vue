<template>
  <div class="w1100 clearfix">
    <div class="checkout-left fl">
      <a class="left-title">Bear Walker</a>
      <div class="left-nav">
        <a class="nav-cart">购物车</a>
        <span class="el-icon-arrow-right"></span>
        <a>信息</a>
        <span class="el-icon-arrow-right"></span>
        <a>运输</a>
        <span class="el-icon-arrow-right"></span>
        <a>付款</a>
      </div>
      <el-form>
        <div class="form-info">
          <span class="info-title">联系信息</span>
          <span class="left-login">已经有账号了？<a>登录</a></span>
          <el-form-item>
            <el-input type="text" v-model="infoForm.email" placeholder="电子邮箱"></el-input>
          </el-form-item>
          <el-checkbox checked="checked">
            让我随时了解新闻和独家优惠
          </el-checkbox>
        </div>
        <div class="form-address">
          <span class="info-title">收件地址</span>
          <el-form-item>
            <el-input type="text" v-model="infoForm.name" placeholder="名字"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="公司（可选）"></el-input>
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
        </div>
        <div class="left-check clearfix">
          <router-link to="/cart">
            <a class="backcart fl el-icon-arrow-left">返回购物车</a>
          </router-link>
          <a class="left-next fr">继续运送</a>
        </div>
      </el-form>
      <div class="left-bottom">
        <a @click="Visible = true">退款政策</a>
        <a>运输政策</a>
        <a>隐私政策</a>
        <a>服务条款</a>
        <el-dialog
          :visible.sync="Visible"
          title="退款政策"
          width="840px"
        >
        </el-dialog>
      </div>
    </div>
    <div class="checkout-right fl">
      <div class="right-goods clearfix" :key="goodsform" v-for="(item, goodsform) in goodsForm">
        <div class="right-goods-img fl">
          <img :src="item.img">
          <div class="right-goods-num">{{item.value}}</div>
        </div>
        <div class="right-goods-title fl">
          <p class="title1">{{item.title}}</p>
          <p class="title2">仅滑板/否</p>
        </div>
        <div class="right-goods-price fr">$ {{item.price}}.00</div>
      </div>
      <div class="right-coupon">
        <el-input placeholder="优惠券"></el-input>
        <el-button>应用</el-button>
      </div>
      <div class="right-amount">
        <div class="amount-price clearfix">
          <span class="fl">小计</span>
          <span class="fr">$ {{price}}.00</span>
        </div>
        <div class="amount-shipping clearfix">
          <div class="fl">运费<a class="el-icon-question"></a></div>
          <div class="fr">下一步计算</div>
        </div>
        <div class="amount-account clearfix">
          <span class="fl">总计</span>
          <span class="price fr">$ {{price}}.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cart from '../cart/cart'
export default {
  data () {
    return {
      Visible: false,
      province: [],
      city: [],
      infoForm: [{
        email: '',
        name: ''
      }],
      goodsForm: '',
      price: '',
      visible: [{
        title: '退款策略'
      },
      {
        title: 'ghj'
      }
      ]
    }
  },
  mounted () {
    this.data()
  },
  methods: {
    data () {
      this.price = 0
      this.goodsForm = cart.data().goodsForm
      for (var i = 0; i < this.goodsForm.length; i++) {
        this.goodsForm[i].price = this.goodsForm[i].Oneprice * this.goodsForm[i].value
        this.price += parseInt(this.goodsForm[i].price)
      }
    }
  }
}
</script>

<style lang='less' scoped>
@import '../../static/common/login.less';
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
        position: relative;
        width: 64px;
        height: 64px;
        background: #ffffff;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        .right-goods-num {
          position: absolute;
          top: -5px;
          right: -5px;
          width: 21px;
          height: 21px;
          .fz(12px);
          .color(#ffffff);
          text-align: center;
          line-height: 21px;
          background: rgba(114, 114, 114, 0.9);
          border-radius: 50%;
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 8px;
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
</style>
