<template>
  <el-col :span="8" class="data" style="height:530px;padding:0 37px 0 22px;">
    <p style="font-size:46px; color:#eee; line-height:124px;letter-spacing:2px;">成立于2006年</p>
    <p style="font-size:14px;color:rgb(114,133,113);letter-spacing:2px;">
      是一家具有建设工程造价咨询，招标代理，工程监理，项目监管的综合性企业
    </p>
    <el-row style="line-height:103px;">
      <el-col :span="12">
        <span class="accoumnt">80</span>
        <span class="address">工程师</span>
      </el-col>
      <el-col :span="12" style="text-align:right;">
        <span class="accoumnt">80</span>
        <span class="address">工程师</span>
      </el-col>
    </el-row>
  </el-col>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.data {
  height: 530px;
  margin-bottom: 228px;
  .accoumnt {
    font-size: 48px;
    color: rgb(243, 154, 50);
    vertical-align: middle;
    display: inline-block;
    margin-right: 32px;
    &::after {
      content: "+";
      font-size: 48px;
      color: rgb(243, 154, 50);
      position: absolute;
      top: -4px;
    }
  }
  .address {
    font-size: 16px;
    line-height: 25px;
    display: inline-block;
    vertical-align: middle;
    color: rgb(114, 113, 113);
    letter-spacing: 2px;
  }
  .introduction {
    p {
      text-indent: 2em;
      font-size: 18px;
      color: rgb(97, 97, 97);
    }
  }
}
</style>
