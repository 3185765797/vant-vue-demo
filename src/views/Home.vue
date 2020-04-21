<template>
  <div class="home">
   <van-row>
    <van-col >图标</van-col>
    <van-col span="13">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
    </van-col>
    <van-col span="5"><van-button type="default">登陆</van-button></van-col>
  </van-row>
  <van-tabs>
    <van-tab to="/home/frist" title="标签1">
      <router-view />
    </van-tab>
    <van-tab to="/home/second" title="标签2">
      <router-view />
    </van-tab>
    <van-tab to="/home/third" title="标签3">
      <router-view />
    </van-tab>
  </van-tabs>
  <Tabbar/>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar.vue'
export default {
  name:"home",
  data(){
    return{
      value:"",
    };
  },
  components:{
      Tabbar,
    },
}
</script>
