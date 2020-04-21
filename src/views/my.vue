<template>
<div>
   <div class="icon">
      <span>2222222222222222</span>
   </div>
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
.icon{
   background-color: red;
   height: 160px;
   border: none;
   /* border-radius:0  0  187.5px/30px 0 ; */
   border-radius:0  0  190px  190px/30px ;

}

</style>