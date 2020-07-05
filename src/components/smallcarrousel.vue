<template>
  <el-carousel height="700px">
    <el-carousel-item v-for="item in 4" :key="item">
        <h2>{{item}}</h2>
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped></style>
