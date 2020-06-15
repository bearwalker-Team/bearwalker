<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/common/Header'
import Footer from './components/common/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="less">
@import '~@/static/common/style.less';
</style>
