<template>
  <div>
    <div class="register-box">
      <el-form :rules="rules" :model="ruleForm">
        <div class="register-title">创建账号</div>
        <el-form-item prop="name">
          <input placeholder="昵称" v-model="ruleForm.name">
        </el-form-item>
        <el-form-item prop="email">
          <input placeholder="邮箱" v-model="ruleForm.email">
        </el-form-item>
        <el-form-item prop="password">
          <input placeholder="密码" show-password v-model="ruleForm.password">
        </el-form-item>
        <el-form-item prop="checkPass">
          <input placeholder="确认密码" show-password v-model="ruleForm.checkPass">
        </el-form-item>
        <el-form-item>
          <el-button @click="register('ruleForm')" class="register-btn">创建</el-button>
        </el-form-item>
      </el-form>
      <a>返回商店</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        email: '',
        password: '',
        checkPass: ''
      },
      rules: {
        name: [
          { required: true, trigger: 'blur' }
        ],
        email: [
          { required: true, trigger: 'blur' }
        ],
        password: [
          { required: true, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    register (formName) {
      // 验证昵称
      var regName = /^([\w\u4E00-\u9FA5_\-.]+)+$/
      if (this.ruleForm.name !== '' && !regName.test(this.ruleForm.name)) {
        this.$message({
          message: '昵称不能包含特殊字符',
          type: 'error'
        })
        return false
      }
      // 邮箱验证
      var regEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
      if (this.ruleForm.email !== '' && !regEmail.test(this.ruleForm.email)) {
        if (!(this.ruleForm.email).match(/@/g)) {
          this.$message({
            message: '电子邮箱地址中需包含"@"',
            type: 'error'
          })
          return false
        }
        this.$message({
          message: '请输入正确的邮箱地址',
          type: 'error'
        })
        return false
      }
      // 密码验证
      var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/
      if (this.ruleForm.email || this.ruleForm.password === '') {
        this.$message({
          message: '请输入正确的邮箱和密码',
          type: 'error'
        })
        return false
      }
      if (this.ruleForm.password !== '' && !regPassword.test(this.ruleForm.password)) {
        this.$message({
          message: '密码必须包含大小写字母和数字的组合，可以使用特殊字符，长度在8-10之间',
          type: 'error'
        })
        return false
      }
      // 确认密码
      if (this.ruleForm.checkPass !== this.ruleForm.password) {
        this.$message({
          message: '两次输入密码不一样，请确认',
          type: 'error'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../static/common/login.less';
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
.el-form-item {
  margin: 0;
}
</style>
