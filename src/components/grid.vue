<template>
  <van-grid :column-num="Ccolumn" :gutter="Cgutter" >
  <van-grid-item v-for="value in 6" :key="value" icon="photo-o" text="文字" />
</van-grid>
</template>

<script>
export default {
    props:[
    {
       Ccolumn:String,
       default:"4"
    },
    {
       Cgutter:Boolean,
       default:false
    },
    {
       border:Boolean,
       default:true
    },
    
    ],
    



}
</script>

<style>

</style>