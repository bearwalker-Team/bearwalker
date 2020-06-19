<template>
  <div>
    <div class="durable bg-fff">
      <div class="w1200">
        <div class="inner-content">
          <div class="inner-title"><h5><font class="f-size-53">自己做</font></h5></div>
          <div class="f-size-14 fc-c1c1c1 inner-desc">
            <p>每个定制的Bear Walker板都是独一无二的。
            每个定制的Bear Walker板都是独一无二的。每个定制的Bear Walker板都是独一无二的。
            每个定制的Bear Walker板都是独一无二的。每个定制的Bear Walker板都是独一无二的。
            </p>
          </div>
        </div>
        <div class="video-img">
          <div class="big-img">
            <video class="video-stream" controls src="https://cdn.shopify.com/s/files/1/0055/0803/8727/files/Skate_Video_1.mp4?55353" poster="//cdn.shopify.com/s/files/1/1203/3194/files/Screen_Shot_2019-05-02_at_2.38.42_PM.png?v=1556879353" loop></video>
          </div>
          <div class="video-btn play-pause-btn">
            <div class="play-icon">
              <i class="el-icon-caret-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.video-btn {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 120px;
  height: 120px;
  border: 1px solid #fff;
  border-radius: 100%;
  cursor: pointer;
}
.video-btn .play-icon {
  text-align: center;
  line-height: 120px;
}
.video-stream {
  max-height: 660px;
}
.video-img {
  position: relative;
  padding-top: 60px;
}
.inner-desc {
  width: 420px;
  margin-bottom: 15px;
}
.inner-desc p {
  line-height: 24px;
  height: 76px;
  text-overflow: ellipsis;
  overflow: hidden;
}
.inner-title {
  margin: 85px 0 25px 0 ;
}
.inner-content {
  width: 605px;
}
</style>
