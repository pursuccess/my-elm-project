<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <ul class="tab-header">
        <a href="#/hello" class="">hello</a>
        <li><router-link to="/goods">商品</router-link></li>
        <li><router-link to="/seller">详情</router-link></li>
        <li><router-link to="/ratings">评价</router-link></li>
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
