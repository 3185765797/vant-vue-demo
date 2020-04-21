<template>
  <div class="hello">
    <van-tabbar v-model="active">
        <van-tabbar-item to="/home/frist" icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item to="/cate" icon="search">分类</van-tabbar-item>
        <van-tabbar-item to="/find" icon="friends-o">发现</van-tabbar-item>
        <van-tabbar-item to="/cat" icon="setting-o">购物车</van-tabbar-item>
        <van-tabbar-item to="/my" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
   
  </div>
</template>

<script>
export default {
  name: 'Tabbar',
  data() {
    return {
      active: 0,
    };
  },
  
  
}
</script>


<style scoped>

</style>
