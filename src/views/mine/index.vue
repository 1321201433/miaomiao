<template>
  <div>
      <Header tittle='我的喵喵'></Header>
      <login/>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import login from '@/components/login'
export default {
  name:'mine',
  components:{
    Header,
    Footer,
    login,
  }
}
</script>

<style scoped>

</style>