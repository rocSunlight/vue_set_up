<template>
    <div class="layout">
      <headerBar></headerBar>
      <!-- main -->
      <router-view class="main-container"></router-view>
      <footerBar></footerBar>
    </div>
</template>

<script>
    import {headerBar,footerBar} from './index'

    export default {
        name: 'Layout',
        components : {
          headerBar,
          footerBar
        }
    };
</script>

<style scoped>

</style>
