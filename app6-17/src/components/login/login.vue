<template>
  <div class="login-page">
    <div class="login-box" id="login">
      <div class="login-title">登录</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="邮箱" prop="email">
          <el-input placeholder="邮箱" v-model="ruleForm.email" class="login-user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input placeholder="密码" show-password v-model="password" class="login-password"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button class="login-btn" @click="submitForm('ruleForm')">登入</el-button>
      </el-form-item>
      </el-form>
      <a>返回商店</a>
      <a>注册</a>
      <a>忘记密码了吗？</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var checkEmail = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('邮箱不能为空'))
      } else {
        var pass = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if (value === pass) {
          console.log(value)
        }
      }
    }
    return {
      ruleForm: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { validator: checkEmail, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs.formName.validate((valid) => {
        if (valid) {
          console.log(123)
        } else {
          console.log(111)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../static/common/login.less';
.login-page {
  padding: 146px 0 45px 0;
}
.login-box {
  .w1200();
  .center(text-x);
  .pd110();
  a {
    .href()
  }
  .login-title {
    .title()
  }
  .el-form {
    .form();
    .el-form-item {
      .el-button {
        .btn()
      }
    }
  }
}
</style>
