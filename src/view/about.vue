<template>
  <div>
    <banner></banner>
    <div id="about">
      <tabs :tabs="tabs" :Navigation="Navigation"></tabs>
      <zhu :msg="msg"></zhu>
      <el-row class="data">
        <left-tab></left-tab>
        <el-col
          :span="16"
          class="introduction"
          v-show="msg === '公司简介' ? true : false"
        >
          <p id="jianjie"></p>
        </el-col>
        <el-col
          :span="16"
          class="introduction"
          v-show="msg === '企业文化' ? true : false"
        >
          <span id="wenhua"></span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Bus from "@/until/bus.js";
import banner from "@/components/smallcarrousel";
import tabs from "@/components/tabs";
import zhu from "@/components/zhu";
import leftTab from "@/components/leftdes";
export default {
  components: {
    banner,
    tabs,
    zhu,
    leftTab
  },
  data() {
    return {
      Navigation: "",
      tabs: ["公司简介", "企业文化"],
      msg: "公司简介"
    };
  },
  methods: {
    getData() {
      this.$http({
        method: "post",
        url: "/framework/all/subject/info",
        data: {}
      }).then(res => {
        var jianjie = document.getElementById("jianjie");
        jianjie.innerHTML = res.data.data.introduce; 
        var wenhua =  document.getElementById("wenhua");
        wenhua.innerHTML = res.data.data.culture
      });
    }
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.Navigation = this.$router.history.current.name;
    this.getData();
  }
};
</script>
<style lang="scss" scoped>
#about {
  width: 1200px;
  margin: 0 auto;
  .data {
    margin-bottom: 228px;
    .accoumnt {
      font-size: 38px;
      color: rgb(243, 154, 50);
      vertical-align: middle;
    }
    .address {
      font-size: 12px;
      line-height: 20px;
      display: inline-block;
      vertical-align: middle;
    }
    .introduction {
      padding: 38px 46px;
      color: rgb(114, 113, 113);
      border-left: 2px solid rgba(194, 194, 194, 0.933);
      p {
        text-indent: 2em;
        font-size: 18px;
        color: rgb(114, 113, 113);
        line-height: 32px;
        letter-spacing: 1.5px;
      }
      span {
        display: inline-block;
        font-size: 18px;
        color: rgb(114, 113, 113);
        line-height: 32px;
      }
    }
  }
}
</style>
