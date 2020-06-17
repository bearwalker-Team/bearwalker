<template>
  <div>
    <div class="swiper-container" id="swiper2">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="steps-carousel">
            <div class="carousel-block">
              <div class="single-block">
                <div class="steps-theme">
                  <p class="num fc-84c45d f-size-18 font-w">01</p>
                  <p class="title fc-fff">用料</p>
                </div>
                <div class="img-carousel">
                  <div class="single-img">
                    <div class="main-img"></div>
                  </div>
                  <div class="img-desc">
                    <div class="img-desc-title f-size-24 fc-fff margin-b-10">只有最好</div>
                    <div class="img-desc-content f-size-14 fc-c1c1c1">每块板均由专门为Bear Walker板制造的定制枫木胶合板制成。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="steps-carousel">
            <div class="carousel-block">
              <div class="single-block">
                <div class="steps-theme">
                  <p class="num fc-84c45d f-size-18 font-w">02</p>
                  <p class="title fc-fff">用料</p>
                </div>
                <div class="img-carousel">
                  <div class="single-img">
                    <div class="main-img"></div>
                  </div>
                  <div class="img-desc">
                    <div class="img-desc-title f-size-24 fc-fff margin-b-10">只有最好</div>
                    <div class="img-desc-content f-size-14 fc-c1c1c1">每块板均由专门为Bear Walker板制造的定制枫木胶合板制成。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="steps-carousel">
            <div class="carousel-block">
              <div class="single-block">
                <div class="steps-theme">
                  <p class="num fc-84c45d f-size-18 font-w">03</p>
                  <p class="title fc-fff">用料</p>
                </div>
                <div class="img-carousel">
                  <div class="single-img">
                    <div class="main-img"></div>
                  </div>
                  <div class="img-desc">
                    <div class="img-desc-title f-size-24 fc-fff margin-b-10">只有最好</div>
                    <div class="img-desc-content f-size-14 fc-c1c1c1">每块板均由专门为Bear Walker板制造的定制枫木胶合板制成。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="steps-carousel">
            <div class="carousel-block">
              <div class="single-block">
                <div class="steps-theme">
                  <p class="num fc-84c45d f-size-18 font-w">04</p>
                  <p class="title fc-fff">用料</p>
                </div>
                <div class="img-carousel">
                  <div class="single-img">
                    <div class="main-img"></div>
                  </div>
                  <div class="img-desc">
                    <div class="img-desc-title f-size-24 fc-fff margin-b-10">只有最好</div>
                    <div class="img-desc-content f-size-14 fc-c1c1c1">每块板均由专门为Bear Walker板制造的定制枫木胶合板制成。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="steps-carousel">
            <div class="carousel-block">
              <div class="single-block">
                <div class="steps-theme">
                  <p class="num fc-84c45d f-size-18 font-w">05</p>
                  <p class="title fc-fff">用料</p>
                </div>
                <div class="img-carousel">
                  <div class="single-img">
                    <div class="main-img"></div>
                  </div>
                  <div class="img-desc">
                    <div class="img-desc-title f-size-24 fc-fff margin-b-10">只有最好</div>
                    <div class="img-desc-content f-size-14 fc-c1c1c1">每块板均由专门为Bear Walker板制造的定制枫木胶合板制成。</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination btn-bar w1200"></div>
  </div>
</template>
<script language="javascript">
import Swiper from 'swiper'
export default {
  mounted () {
    var mySwiper = new Swiper('#swiper2', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      loop: true,
      autoplay: {
        disableOnInteraction: false
      }
    })
  }
}
</script>
<style lang="less" scoped>
@import '~@/static/common/style.less';
.btn-bar {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
.img-carousel {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.img-desc {
  width: 490px;
}
.single-img {
  width: 675px;
}
.main-img {
  background-image:url(//cdn.shopify.com/s/files/1/1203/3194/files/Cutout.jpg?v=1556879055) ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 365px;
  width: 100%;
  background-position: bottom center;
}
.wrapper-inner {
  margin-bottom: 30px;
}
.steps-theme .num {
  margin-bottom: 15px;
}
.steps-theme {
  margin-bottom: 50px;
}
.steps-theme .title {
  font-size: 35px;
}
</style>

<style lang="less">
.btn-bar .swiper-pagination-bullet.swiper-pagination-bullet-active::after {
  content: ">";
  position: absolute;
  right: -22px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  background-color: #242428;
  color: #fff;
  width: 20px;
  font-size: 18px;
  text-align: right;
}
.btn-bar.swiper-pagination::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  width: calc(100% - 30px);
  margin: 0 auto;
  overflow: hidden;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  background-image: url(https://cdn.shopify.com/s/files/1/0055/0803/8727/files/pag-das.png?10757);
}
.btn-bar .swiper-pagination-bullet {
  justify-content: center;
  height: 60px !important;
  width: 60px !important;
  border: 2px;
  position: relative;
  background: #242428 !important;
  display: flex !important;
  align-items: center !important;
  outline: none;
  border-style: dashed dashed;
  border-color: #6c6c6e;
  opacity: 1 !important;
  transition: all 0.4s ease-in-out;
}
.btn-bar .swiper-pagination-bullet::before {
  content: "";
  display: block;
  transition: all 0.4s ease-in-out;
  height: 25px;
  width: 25px;
  background-color: #6c6c6e;
  border-radius: 100%;
  background-position: center center !important;
}
.btn-bar .swiper-pagination-bullet.swiper-pagination-bullet-active::before {
  background-color: white;
  background-image: url(https://cdn.shopify.com/s/files/1/0055/0803/8727/files/active-pagination.png?10650);
  background-size: 20px;
  background-repeat: no-repeat;
  transition: all 0.4s ease-in-out;
  height: 46px;
  width: 46px;
}
.btn-bar .swiper-pagination-bullet-active {
  border-color: #ffffff;
}
</style>
