<template>
  <div>
    <div class="swiper-container" id="swiper1">
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
  </div>
</template>
<script language="JavaScript">
import Swiper from 'swiper'
export default {
  mounted () {
    var swiper1 = new Swiper('#swiper1', {
      slidesPerView: 3,
      spaceBetween: 30
    })
  }
}
</script>
<style lang="less" scoped>
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
</style>
