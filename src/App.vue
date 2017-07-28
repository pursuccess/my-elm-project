<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <ul class="tab-header">
        <li>商品</li>
        <li>详情</li>
        <li>评价</li>
      </ul>
      <div class="tab-body"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  export default {
    components: {
      'v-header': header
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
