<template>
  <p class="zhu">
    <span class="fl" style="font-size:20px;color:rgb(64,73,88);letter-spacing: 2px;">{{ msg }}</span>
    <span class="fr" style="color:#fff;">深圳市成效项目管理有限公司市</span>
  </p>
</template>
<script>
export default {
    props:{
        msg:{
            type:String,
            default:""
        }
    }
};
</script>
<style lang="scss" scoped>
.zhu {
  height: 60px;
  background: rgb(233, 238, 242);
  box-sizing: border-box;
  padding: 16px 25px;
  margin-bottom: 52px;
  * {
    line-height: 30px;
    font-family: "Microsoft YaHei";
    letter-spacing: 1px;
  }
}
</style>
