<template>
  <div>
    <banner></banner>
    <div id="render">
      <tabs :tabs="tabs"></tabs>
      <zhu :msg="msg"></zhu>
      <!-- 招标公告 -->
      <div v-show="msg === '招标公告' ? true : false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="23" style="margin-left:26px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">深圳市建设项目管理协会创会会员单位。</p>
              <p class="data">
                是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位。
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </p>
      </div>
      <!-- 资料下载 -->
      <div v-show="msg === '资料下载' ? true : false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="23" style="margin-left:26px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">报名及招标文件发售登记表</p>
              <p class="data">
                报名及招标文件发售登记表.doc
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </p>
      </div>
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
      tabs: ["招标公告", "资料下载"],
      msg: "招标公告"
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
#render {
  width: 1200px;
  height: 1000px;
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
