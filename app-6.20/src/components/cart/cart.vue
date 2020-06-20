<template>
  <div class="cart-box" v-if="goodsForm.length === 0">
    <div class="cart-title">
      购物车
    </div>
    <div class="empty-info">
      <div style="margin-bottom: 15px">您的购物车目前是空的。</div>
      <div>继续浏览请点击<a>这里</a>。</div>
    </div>
  </div>
  <div class="cart-box" v-else>
      <div class="cart-title">
        购物车
      </div>
    <div class="cart-goods" :key="goods" v-for="(item, goods) in goodsForm">
      <div class="goods-img" :style="{ background: 'url('+item.img+') center'}"></div>
      <div class="goods-info">
        <div class="goods-title">{{item.title}}</div>
        <a class="goods-more">显示详细信息</a>
      </div>
      <div class="goods-num">
        <button @click="changeNum(goods,0)">-</button>
        <input type="text" ref="num" :value='item.value' oninput="value= value.replace(/[^\d]/g,'')" maxlength="4" />
        <button @click="changeNum(goods,1)">+</button>
      </div>
      <div class="goods-price">
        <div class="price" >$ {{item.price}}.00</div>
        <a class="goods-remove" @click="remove(goods)">去掉</a>
      </div>
    </div>
    <div class="cart-account clearfix">
      <div class="price-all clearfix">
        <span class="fl">小计</span>
        <span class="fr">${{price}} .00</span>
      </div>
      <div class="price-other clearfix">
        <span class="fl">其他和税收</span>
        <span class="fr">在结算时计算</span>
      </div>
      <div class="price-account clearfix">
        <span class="fl">总计</span>
        <span class="fr">$ {{price}}.00</span>
      </div>
      <div class="cart-btn fr">
        <el-button class="reload-btn" @click="reload">更新购物车</el-button>
        <router-link to="/checkout">
          <el-button class="settle-btn">安全结账</el-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      price: 1,
      goodsForm: [
        {
          index: 0,
          title: '迷你G',
          img: 'https://cdn.shopify.com/s/files/1/1203/3194/products/IMG_9236_Trucks_CrossWide_medium.png?v=1569148722',
          value: 1,
          Oneprice: 48.00,
          price: ''
        },
        {
          title: '迷你G',
          img: 'https://cdn.shopify.com/s/files/1/1203/3194/products/IMG_9236_Trucks_CrossWide_medium.png?v=1569148722',
          value: 2,
          Oneprice: 49.00,
          price: ''
        }
      ]
    }
  },
  mounted () {
    this.countPrice()
    console.log(this.price)
  },
  methods: {
    // 数量控制方法
    changeNum (goods, index) {
      if (index === 0 && this.goodsForm[goods].value > 1) {
        this.goodsForm[goods].value -= 1
      } else if (index === 1 && this.goodsForm[goods].value <= 10) {
        this.goodsForm[goods].value += 1
      }
      this.goodsForm[goods].price = this.goodsForm[goods].value * this.goodsForm[goods].Oneprice
      this.countPrice()
    },
    // 金额计算方法
    countPrice () {
      var price = 0
      for (var i = 0; i < this.goodsForm.length; i++) {
        this.goodsForm[i].price = this.goodsForm[i].Oneprice * this.goodsForm[i].value
        price += parseInt(this.goodsForm[i].price)
      }
      this.price = price
    },
    // 商品移除
    remove (goods) {
      this.goodsForm.splice(this.goodsForm[goods], 1)
    },
    // 页面重载
    reload () {
      location.reload(true)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../static/common/login.less';
.cart-box {
  .w1200();
  .pd110();
  .cart-title {
    .title()
  }
  .empty-info {
    .info();
    a {
      .href();
      display: inline-block;
    }
  }
  .cart-goods {
    .clearfix();
    border-bottom: 2px solid rgb(238, 233, 233,1);
    .goods-img {
      width: 115px;
      height: 115px;
      .fl();
      background-size: 100% 100% !important
    }
    .goods-info {
      .fl();
      padding: 15px 15px 45px 30px;
      width: 460px;
      .goods-title {
        .cart-num();
        margin-bottom: 10px;
      }
      .goods-more {
        .more();
      }
    }
    .goods-num {
      .fl();
      padding-top: 20px;
      button {
        border: none;
        background: #ffffff;
        .fz(28px);
        font-weight: 700;
        color: #a7a7a7;
        vertical-align: middle;

      }
      input {
        .cart-num();
        border: none;
        width: 55px;
        text-align: center;
        vertical-align: middle;
        margin: 0 5px;
      }
    }
    .goods-price {
      .fr();
      padding: 15px 15px 45px 30px;
      .price {
        .cart-num()
      }
      .goods-remove {
        .remove();
        .fr()
      }
    }
  }
  .cart-account {
    padding: 30px 0 90px 40px;
    .fz(14px);
    .color(#242428);
    border-bottom: 2px solid rgb(238, 233, 233,1);

  }
  .price-all, .price-other {
    padding-bottom: 20px;
  }
  .price-account {
    .fz(30px);
    padding-bottom: 20px;
  }
  .reload-btn, .settle-btn {
    .btn();
    opacity: 1;
    display: inline-block;
    margin-left: 5px;
  }
}
</style>
