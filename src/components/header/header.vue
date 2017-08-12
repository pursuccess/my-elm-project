<template>
  <div class="content-wrapper">
    <div class="avatar">
      <img width="64" height="64" :src="seller.avatar">
    </div>
    <div class="content">
      <div class="title">
        <span class="brand"></span>
        <span class="name">{{seller.name}}</span>
      </div>
      <div class="description">
        {{seller.description}}/{{seller.deliveryTime}}分钟送达
      </div>
      <div v-if="seller.supports" class="support">
        <span class="icon"></span>
        <span class="text">{{seller.supports[0].description}}</span>
      </div>
    </div>
    <div v-if="seller.supports" class="support-count" @click="">
      <span class="count">{{seller.supports.length}}个</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
  </div>
</template>

<style>

</style>

<script>
  export default {
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>


