<template>
  <div class="list">
    我是异步加载的list

    <!-- 嵌套路由lists -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .list{
    color red
  }
</style>
