<template>
<div>
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
              <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
            </div>
            <div class="pay">
              <button>立即购买</button>
              <p>$48.00</p>
            </div>
          </div>
        </div>
    </div>
  </div>
  <div class="bg-black bg-242428">
    <div class="tab-btn w1200">
        <ul>
          <li @click="number=0" class="bu" :class="{tab:number==0}">总览</li>
          <li @click="number=1" class="bu" :class="{tab:number==1}">眼镜</li>
          <li @click="number=2" class="bu" :class="{tab:number==2}">时间线</li>
          <li @click="number=3" class="bu" :class="{tab:number==3}">相比</li>
        </ul>
    </div>
    <div class="bu-c1 w1200" v-show="number==0">
      <div class="c1-left">
        <span>该商品可用</span>
        <div class="t-name">熊沃克的期望</div>
        <a>这些是Bear Walker板的功能</a>
      </div>
      <div class="c1-right">
        <ul>
          <li><a>-</a><span>每个板都是按订单切割和上漆的，因此没有两个板是相同的。</span></li>
          <li><a>-</a><span>您的木板是手工打磨和上漆的，因此我们对细节非常谨慎。</span></li>
          <li><a>-</a><span>我们一直坚持到您的董事会完美为止。有时，这意味着我们必须重新开始，所以请耐心等待。</span></li>
          <li><a>-</a><span>请与我们分享您的照片，并在社交媒体上标记我们。Bear Walker董事会遍布世界各地，我们希望与所有人共享您的董事会</span></li>
        </ul>
      </div>
    </div>
    <div class="bu-c2 w1200" v-show="number==1">
      <div class="c2-left">
        <div class="t-name">主板规格</div>
      </div>
      <div class="c2-right">
        <ul>
          <li><a>-</a><span>由我们的定制9层枫木制成。</span></li>
          <li><a>-</a><span>长度26英寸。</span></li>
          <li><a>-</a><span>如果添加卡车和车轮：装有65毫米Hyberium车轮，Mini Logo轴承，8.5“口径卡车和3/8”立管垫。没有车轮咬，只是好时光。</span></li>
          <li><a>-</a><span>如果添加了碎灯：装配有碎灯前灯和尾灯。</span></li>
        </ul>
      </div>
    </div>
    <div class="bu-c3 w1200" v-show="number==2">
      <div class="c3-left">
        <div class="t-name">时间线</div>
        <a>由于每个板都是手工定做的，因此在下订单后，每个板需要6-8周的时间才能到达。</a>
      </div>
      <div class="c3-right">
        <ul>
          <li><a>-</a><span>从木头的保险开关板。</span></li>
          <li><a>-</a><span>砂磨所有细节。</span></li>
          <li><a>-</a><span>上漆并重新打磨以显示设计细节。</span></li>
          <li><a>-</a><span>添加透明的保护涂层。</span></li>
          <li><a>-</a><span>组装，包装和运输。</span></li>
        </ul>
      </div>
    </div>
    <div class="bu-c4 w1200" v-show="number==3">
      <div class="c4-left">
        <div class="t-name">时间线</div>
        <a>由于每个板都是手工定做的，因此在下订单后，每个板需要6-8周的时间才能到达。</a>
      </div>
      <div class="c4-right">
        <ul class="list-1">
          <li>平均价格</li>
          <li>定做</li>
          <li>手绘</li>
          <li>Graip</li>
          <li>塞子显示</li>
        </ul>
         <ul class="list-2">
          <li><img src="https://cdn.shopify.com/s/files/1/1203/3194/files/premium-logo.png?13828"/></li>
          <li>$300</li>
          <li>√</li>
          <li>√</li>
          <li>极致</li>
          <li>地狱啊</li>
        </ul>
          <ul class="list-3">
          <li>卡佛</li>
          <li>$300</li>
          <li>×</li>
          <li>×</li>
          <li>一般</li>
          <li>不</li>
        </ul>
         <ul class="list-4">
          <li>9区</li>
          <li>$400</li>
          <li>×</li>
          <li>×</li>
          <li>一般</li>
          <li>不</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="bg-242428"><slide-carousel></slide-carousel></div>
  <div class="bg-242428 clickC"><div class="w1200"><click-carousel></click-carousel></div></div>
  <bg-video></bg-video>
  <div class="huanban-posi">
    <div class="posi">
      <div class="bg-w">
        <div class="bg-w-text">
          <a>高端组件</a>
          <p>我们使用优质的Hyberium车轮和卡车</p>
        </div>
      </div>
      <div class="w1200">
        <div class="b-img"><img src="//cdn.shopify.com/s/files/1/1203/3194/files/Board_Details.png?v=1556903964"/></div>
      </div>
      <div class="bg-w-2">
        <div class="bg-w-2-text">
          <a>定制研磨手柄</a>
          <p>我们的研磨抓地力优于标准抓地力胶带。</p>
        </div>
        <div class="bg-w-2-text-2">
          <div class="title">站起来的木板</div>
          <span>所有木板均由最高质量的无填料枫木9层木板制成。该枫木可使板略微弯曲，但仍保持坚固，以实现尽可能平稳的行驶。油基污渍和五层透明涂层确保了它在任何天气下的耐久性。</span>
        </div>
      </div>
    </div>
  </div>
  <div class="consult-question">
    <div class="w1200">
      <div class="question-content">
        <div class="inner-content">
          <div class="inner-title problem"><h5><font class="f-size-53">自己做</font></h5></div>
          <div class="f-size-14 fc-c1c1c1 inner-desc detail">
            <p>每个定制的Bear Walker板都是独一无二的。
            每个定制的Bear Walker板都是独一无二的。每个定制的Bear Walker板都是独一无二的。
            每个定制的Bear Walker板都是独一无二的。每个定制的Bear Walker板都是独一无二的。
            </p>
          </div>
          <div><a class="a-btn">联系我们</a></div>
        </div>
        <div class="question-bar">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item class="single-item" title="一致性 Consistency" name="1">
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item class="single-item" title="反馈 Feedback" name="2">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item class="single-item" title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item class="single-item" title="可控 Controllability" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
  <div class="sign-box bg-242428">
    <div class="sign w1200 bg-242428">
      <div class="sign-frame">
        <div class="tips fc-fff">首先获取投放日期。</div>
        <span class="icon-sign fc-fff">></span>
        <input type="email" placeholder="在此处输入电子邮件...">
        <a class="a-btn a-sign">注册</a>
      </div>
    </div>
  </div>
  <div class="payment">
       <div class="box">
         <div class="left">
           <a>迷你G</a>
           <p>$250.00</p>
         </div>
         <button class="right">立即购买</button>
       </div>
  </div>
</div>
</template>
<script>
import SlideCarousel from '../../common/lunbo/slideCarsoul'
import ClickCarousel from '../../common/lunbo/clickCarousel'
import BigVideo from '../../common/video/bigVideo'
export default {
  data () {
    return {
      num: '1',
      number: '0'
    }
  },
  components: {
    'slide-carousel': SlideCarousel,
    'click-carousel': ClickCarousel,
    'bg-video': BigVideo
  },
  mounted () {
    window.addEventListener('scroll', this.showIcon)
  },
  methods: {
    handleChange (value) {
    },
    showIcon () {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 1000
      ) {
        // document.querySelector('.payment').style.display = 'block'
      } else {
        // document.querySelector('.payment').style.display = 'none'
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/common/style.less';
@import '~@/static/common/tab.less';
[type="email"] {
  padding-left: 20px;
  width: 552px;
  height: 41px;
  background-color: #f4f4f4;
  outline: none;
  border: none;
}
.inner-content {
  margin-right: 50px ;
  width: 50%;
}
.inner-desc.detail p {
  width: 420px;
  line-height: 24px;
  height: 76px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.sign-box .a-btn.a-sign {
  margin-left: 15px;
  margin-top: 0;
}

.sign-box .sign-frame .icon-sign {
  margin: 0 20px;
}
.sign-box .sign-frame {
  display: flex;
  align-items: center;
}
.sign-box .sign-frame .tips {
  font-size: 14px;
}
.sign-box .sign {
  padding: 52px 135px;
  bottom: -68px;
}
.inner-title.problem {
  margin-top: 0;
}
.question-content {
  display: flex;
}
.question-bar {
  width: 50%;
}
.consult-question {
  padding: 120px 0;
}
.clickC {
  padding: 20px 0 150px 0;
}
.huanban-posi {
  padding: 120px 0 50px 0
}
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
    width: 180px;
    height: 45px;
    border: 1px solid black;
    border-radius: 0;
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
 // 下个板块 滑板
  .posi{
    position: relative;
  }
  .bg-w{
    width: 100%;
    height: 300px;
    background: #ffffff;
    padding-top: 60px;
    .bg-w-text{
      margin-left: 1000px;
      a{
        .fz(24px);
      }
      p{
         .fz(14px);
        margin-top: 30px;
        color: gray;
      }
    }
  }
  .b-img{
    position: absolute;
    top: 0;
  }
  .bg-w-2{
    width: 100%;
    height: 300px;
    background: #242428;
    padding-top: 60px;
    .bg-w-2-text-2{
      color: #ffffff;
      margin-left: 800px;
      .title{
        .fz(38px);
        font-weight: bolder;
        margin-bottom: 30px
      }
      span{
         .fz(14px);
        display: block;
        width: 480px;
        color: gray;
      }
    }
    .bg-w-2-text{
      margin-left: 100px;
      color: #ffffff;
      a{
        .fz(24px);
      }
      p{
         .fz(14px);
        margin-top: 30px;
        color: gray;
      }
    }
  }

  // payment
  .payment{
    background: #5d6ac4;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    transition: all 4s cubic-bezier(0.46, 0.01, 0.32, 1);
    transform: translateY(0px);
    .box{
      margin: auto;
      padding: 8px;
    }
     .box .right:hover{
       width: 128px;
       height: 45px;
       border: 0;
       border: rgb(231, 229, 229);
    }
    .box{
      display: flex;
      justify-content: space-between;
      align-content: center;
      width: 340px;
      .left{
        a{
          .fz(20px);
          font-weight: bold;
          color: gray;
        }
        p{
          .fz(20px);
          color: #ffffff;
          margin-top: 10px;
          font-weight: bolder;
        }
      }
      .right{
        width: 130px;
        height: 47px;
        border: 0;
        .fz(12px);
        color: #5d6ac4;
        margin-top: 10px;
      }
    }
  }
</style>
