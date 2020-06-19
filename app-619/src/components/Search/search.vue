<template>
  <div class="login-page">
    <div class="search-box">
      <div class="search-title">
        在我们的网站上搜索产品
      </div>
      <div class="search-title">
        您对“木板”的搜索显示以下内容：
      </div>
      <form class="search-form">
        <input class="search-input" placeholder="搜索我们的商店" />
        <span>
          <button class="search-btn">
            <span class="el-icon-search"></span>
          </button>
        </span>
      </form>
      <div class="search-result">
        <div class="search-goods clearfix">
          <div class="goods-img fl">
            <img />
          </div>
          <div class="goods-info fl">
            <a class="info-title">水手巡洋舰</a>
            <div class="info-price">$135.00</div>
            <div class="info-des">开始设计的一切！我制造了我的第一名水手，并于2年前将其带到夏威夷成立了我的公司。现在绝对是Bear Walker的经典作品。我可以正式地说，我现在已经通过更好的抓地力和完美的巡航形状对其进行了完善。水手是...</div>
          </div>
        </div>
        <div class="search-dots">
          <a class="search-btn">1</a>
          <a class="search-btn">
            <span class="el-icon-right"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='less' scoped>
@import '../../static/common/login.less';
.login-page {
  margin: 146px 0 45px 0;
}
.search-box {
  width: 850px;
  margin: auto;
  padding-top: 100px;
  text-align: center;
  .search-title {
    .title()
  }
  .search-form {
    .search-input {
      width: 210px;
      padding: 0 15px;
      height: 46px;
      line-height: 46px;
      border: 1px solid #000000;
      border-right: none;
      border-radius: 2px;
      outline: none;
    }
    .search-btn {
      width: 100px;
      height: 46px;
      line-height: 46px;
      background: #5d6ac4;
      border: none;
      border-radius: 0 10px 10px 0;
      margin-bottom: 60px;
      .el-icon-search {
        color: #ffffff;
      }
    }
  }
  .search-result {
    text-align: left;
    .search-goods {
      padding-bottom: 30px;
      border-bottom: 2px solid rgb(238, 233, 233,1);
      .goods-img {
        width: 240px;
        height: 240px;
        img {
          width: 100%;
          height: 100%
        }
      }
      .goods-info {
        .color(#242428);
        padding-left: 50px;
        width: 356px;
        .info-title {
          .fz(32px);
          opacity: 0.7;
        }
        .info-price, .info-des {
          width: 555px;
          .fz(14px);
          opacity: 0.5;
          margin-top: 15px;
        }
      }
    }
    .search-dots {
      padding: 40px 0 120px;
      .search-btn {
        display: inline-block;
        text-align: center;
        width: 44px;
        height: 44px;
        line-height: 44px;
        background: #fff;
        .color(#5d6ac4);
        .fz(14px);
        font-weight: 500;
        border: 1px solid #5d6ac4;
        cursor: pointer;
        margin: 0 15px;
        span {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
