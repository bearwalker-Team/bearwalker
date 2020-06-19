<template>
  <div class="contact">
    <div class="w1200">
      <div class="contact-nav">
        <span>家</span>
        <span>-</span>
        <span>联系</span>
      </div>
      <div class="contact-con">
        <div class="contact-imfor">
          <div class="collection">
            <div class="collection-title">伸手</div>
            <div class="collection-desc">请给我打个电话，我很想听听您的想法和想法！</div>
          </div>
          <form>
            <div class="contact-input">
              <div class="input-title">Enter name*</div>
              <el-input v-model="input"></el-input>
            </div>
            <div class="contact-input">
              <div class="input-title">Enter phone number</div>
              <el-input v-model="input"></el-input>
            </div>
            <div class="contact-input">
              <div class="input-title">Enter email*</div>
              <el-input v-model="input"></el-input>
            </div>
            <div class="contact-input">
              <div class="input-title">Why are you reaching out?*</div>
              <el-input type="textarea" :rows="10"></el-input>
            </div>
            <div class="yanzheng"></div>
          </form>
          <a class="a-btn">Submit</a>
        </div>
        <div class="contact-host">
          <div class="host-img">
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592198919863&di=f35a98252439b14e5c06d3084702c9fa&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F20%2F108%2F1744%2F113431160.jpg" />
          </div>
          <div class="address">
            <div class="address-emil">
              <p>电子邮件：</p>
              <p>info@bearwalker.com</p>
            </div>
            <div class="adr">
              <p>地址：</p>
              <p>8722 Rand Avenue达芙妮，AL 36526</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style scoped>
  .contact{
    margin-top: 146px;
  }
  .contact-nav{
    padding-top: 110px;
  }
  .contact-con{
    display: flex;
  }
  .contact-imfor{
    width: 50%;
    padding-bottom: 110px;
    padding-right: 80px;
  }
  .contact-host{
    width: 50%;
    padding-left: 55px;
  }
  .collection{
    padding: 80px 0;
  }
  .collection-title{
    font-size: 35px;
    padding-bottom: 20px;
  }
  .collection-desc{
    font-size: 14px;
    color: #c1c1c1;
  }
  .contact-input{
    margin-bottom: 50px;
  }
  .input-title{
    margin-bottom: 15px;
  }
  .yanzheng{
    width: 300px;
    height: 74px;
    border: 1px solid #ccc;
  }
  .host-img img{
    width: 532px;
    height: 520px;
  }
  .address{
    margin-top: 45px;
  }
  .address-emil{
    margin-bottom: 50px;
  }
</style>
