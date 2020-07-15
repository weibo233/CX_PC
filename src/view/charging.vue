<template>
  <div>
    <banner></banner>
    <div id="chanrging">
      <tabs :tabs="tabs" :Navigation="Navigation"></tabs>
      <zhu :msg="msg"></zhu>
      <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
        <el-col  :span="22" style="margin-left:30px;">
          <div class="time fl">
            <p class="y">2020</p>
            <p class="md">06/30</p>
          </div>
          <div class="notice fr">
            <p class="title">造价咨询服务收费标准</p>
          </div>
        </el-col>
      </el-row>
      <p style="text-align:center;">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
      </p>
    </div>
  </div>
</template>
<script>
import Bus from "@/until/bus.js";
import banner from "@/components/smallcarrousel";
import tabs from "@/components/tabs";
import zhu from "@/components/zhu";
export default {
  components: {
    banner,
    tabs,
    zhu
  },
  data() {
    return {
      Navigation:"",
      tabs: ["收费标准"],
      msg: "收费标准"
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.Navigation = this.$router.history.current.name
  }
};
</script>
<style lang="scss" scoped>
#chanrging {
  width: 1200px;
  margin: 0 auto;
  .time {
    width: 100px;
    height: 100px;
    background: rgb(29, 80, 159);
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    padding: 21px 0;
    .y {
      font-size: 24px;
    }
    .md {
      font-size: 20px;
    }
  }
  .notice {
    box-sizing: border-box;
    width: calc(100% - 100px);
    height: 100px;
    border-bottom: 2px dashed #eee;
    padding: 17px 28px;
    cursor: pointer;
    .title{
      line-height: 60px;
    }
    &:hover {
      background: rgb(233, 238, 242);
      color: #000;
    }
    * {
      font-size: 20px;
      line-height: 33px;
      color: rgb(128, 128, 128);
    }
  }
}
</style>
