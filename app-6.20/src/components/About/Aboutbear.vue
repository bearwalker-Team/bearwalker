<template>
  <div class="aboutbear">
    <div class="w1200">
      <div class="aboutbear-nav">
        <span>家</span>
        <span>-</span>
        <span>遇见熊</span>
      </div>
      <div class="aboutbear-name">冒险的设计师，制造者和寻求者。</div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swiper-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592198919863&di=f35a98252439b14e5c06d3084702c9fa&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg" />
          </div>
          <div class="swiper-slide">
            <img class="swiper-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592198919863&di=f35a98252439b14e5c06d3084702c9fa&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg" />
          </div>
          <div class="swiper-slide">
            <img class="swiper-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592198919863&di=f35a98252439b14e5c06d3084702c9fa&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg" />
          </div>
          <div class="swiper-slide">
            <img class="swiper-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592198919863&di=f35a98252439b14e5c06d3084702c9fa&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg" />
          </div>
          <div class="swiper-slide">
            <img class="swiper-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592198919863&di=f35a98252439b14e5c06d3084702c9fa&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg" />
          </div>
        </div>
      </div>
      <div class="aboutbear-box">
        <div class="aboutbear-title">关于熊</div>
        <div class="aboutbear-desc">
          <p>
            我最喜欢在家中的一个车间，对技术，艺术和手工艺充满热情。在克莱姆森大学期间，我为高级设计项目创建了第一个滑板；任务是使用创新的印刷技术设计滑板。我只用了40个板子，却再也没有回头。
          </p>
          <p>
            我结合了古老的设计，精心的工艺和尖端的创新，以重新发明现代滑板。通过有策略地从木头本身雕刻出握把，我消除了对握带的需要。这项正在申请专利的技术可提供出色的牵引力，并与每个板的设计集成在一起，从而确保没有两个板相同。
          </p>
          <p>
            Bear Walker滑板不仅是高品质的滑板，而且还是功能性艺术品。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        clickable: true
      }
    })
  }
}
</script>

<style scoped>
  .aboutbear{
    margin-top: 146px;
  }
  .aboutbear-nav{
    padding: 100px 0 100px 0;
  }
  .aboutbear-name{
    font-size: 53px;
  }
  .swiper-slide .swiper-img{
    max-width: 374px;
    height: 538px;
  }
  .swiper-slide:nth-child(1){
    margin-top: 145px;
    margin-right: 27px;
  }
  .swiper-slide:nth-child(2){
    margin-top: 350px;
    margin-right: 27px;
  }
  .swiper-slide:nth-child(3){
    margin-top: 0px;
    margin-right: 27px;
  }
  .swiper-slide:nth-child(4){
    margin-top: 145px;
    margin-right: 27px;
  }
  .swiper-slide:nth-child(5){
    margin-top: 350px;
    margin-right: 27px;
  }
  .aboutbear-box{
    width: 620px;
    margin-left: 320px;
    padding: 65px 0;
  }
  .aboutbear-title{
    font-size: 35px;
  }
  .aboutbear-desc{
    margin-top: 40px;
    font-size: 18px;
  }
  .aboutbear-desc p{
    margin-bottom: 40px;
  }
</style>
