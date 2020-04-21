<template>
<div>
  <van-card
  num="2"
  price="2.00"
  desc="描述信息"
  title="商品标题"
  thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
/>
  <Tabbar/>
</div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  components:{
      Tabbar,
    },

}
</script>

<style>

</style>