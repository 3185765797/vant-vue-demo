<template>
  <div>
    <van-nav-bar title="标题" left-text="返回" left-arrow>
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-sidebar v-model="activeKey">
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
      <van-sidebar-item title="标签名称" />
    </van-sidebar>
    <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  data() {
    return {
      activeKey: 0,
    };
  },
  components:{
      Tabbar,
    },

}
</script>

<style>

</style>