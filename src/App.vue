<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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
  import header from 'components/header/header.vue'
  const ERR_OK = 0;
  export default {
    data: function() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        response = response.body;
        if (response.errno == ERR_OK) {
          this.seller = response.data;
        }
      });
    },
    components: {
      'v-header': header
    }
  }
</script>

<style>

</style>

