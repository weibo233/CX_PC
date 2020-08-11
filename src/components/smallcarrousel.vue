<template>
  <el-carousel height="300px" class="banneri" indicator-position="none">
    <el-carousel-item v-for="(item,idx) in imgurl" :key="idx">
      <img :src="item.url" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return{
      imgurl:[
        {
          url: require("@/assets/images/main/banner2.jpg")
        }
      ]
    }
  }
};
</script>
<style lang="scss" scoped>
.banneri{
  width: 100%;
  min-width: 1200px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>
