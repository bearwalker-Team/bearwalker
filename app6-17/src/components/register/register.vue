<template>
  <div class="register-page">
    <div class="register-box">
      <el-form>
        <div class="register-title">创建账号</div>
        <input placeholder="名" v-model="firstName">
        <input placeholder="姓" show-password v-model="lastName">
        <input placeholder="邮箱" v-model="email">
        <input placeholder="密码" show-password v-model="password">
        <el-button class="register-btn">创建</el-button>
      </el-form>
      <a>返回商店</a>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../../static/common/login.less';
.register-page {
  padding: 146px 0 45px 0;
}
.register-box {
  .w1200();
  .pd110();
  .center(text-x);
  a {
    .href();
  }
  .register-title {
    .title()
  }
  .el-form {
    .form();
    input {
      .input()
    }
  }
  .register-btn {
    .btn()
  }
}
</style>

<script>
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }
}
</script>
