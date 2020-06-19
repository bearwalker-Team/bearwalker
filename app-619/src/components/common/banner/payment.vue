<template>
    <div>
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
<style lang="less" scoped>
@import '~@/static/common/style.less';
 .payment{
    display: none;
    background: #5d6ac4;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
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
<script>
import Swiper from 'swiper'
export default {
  mounted () {
    window.addEventListener('scroll', this.showIcon)
  },
  methods: {
    showIcon () {
      if (
        !!document.documentElement.scrollTop &&
        document.documentElement.scrollTop > 1000
      ) {
        document.querySelector('.payment').style.display = 'block'
      } else {
        document.querySelector('.payment').style.display = 'none'
      }
    }
  }
}
</script>
