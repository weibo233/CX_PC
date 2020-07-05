<template>
  <el-row
    style="box-sizing:border-box;padding:20px 0 26px 0;border-bottom:2px dashed #eeee;"
  >
    <el-col :span="10">
      <img :src="information.url" alt="" style="width:100%;height:100px;" />
    </el-col>
    <el-col :span="12" class="Bidding-data" :offset="2">
      <p>
        <span class="fl" style="color:rgb(128,128,128);">{{ information.title }}</span>
        <span class="fr" style="color:#cac3c3;">{{ information.time }}</span>
      </p>
      <p
        style="text-indent:2em; margin-top:28px;color:rgb(128, 110, 110);overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
white-space:pre-wrap;
-webkit-box-orient:vertical;  
-webkit-line-clamp:4;"
      >
        {{ information.data }}
      </p>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    information: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  created() {}
};
</script>
<style lang="scss" scoped>
.bidding-data {
  font-family: "Microsoft YaHei";
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed #eee;

  .data {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .time {
    color: #cac3c3;
  }
}
.Bidding-data {
  font-size: 12px;
}
//  style="margin-top:20px;margin-bottom:6px;padding-bottom:20px;border-bottom:2px dashed #eeee;"
</style>
