<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="10000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-grid column-num="5">
             <van-grid-item icon="photo-o" text="文字"  v-for="i in  10" :key="i" />
    </van-grid>
    <span class="goodslist">商品列表</span>
    <van-grid column-num="2" gutter="10" class="goods">
             <van-grid-item 
             class="goodsitems" icon="photo-o" text="文字"
              v-for="i in  30" :key="i" 
              @click="getdetails"/>
    </van-grid>

  </div>

</template>

<script>
export default {
  methods:{
    getdetails(){
      this.$router.push("/details")
    }
  }

}
</script>

<style>
.goodslist{
    text-align: center;
    display:block;
}
.goods{
    background-color:red;
}
.goodsitems{
    color: blue;
    border-color:yellow;
    border-width: 2px;
    border-style: soild;
    background:3px
}
</style>