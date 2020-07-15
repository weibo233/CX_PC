<template>
  <div>
    <banner></banner>
    <div id="policy">
      <tabs :tabs="tabs"></tabs>
      <zhu :msg="msg"></zhu>
      <!-- 行政法规 -->
      <div class="fagui" v-show="msg == '行政法规'?true:false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">国务院办公厅转发建设部国家计委监察部关于健全和规范有形建筑市场若干意见的通知</p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </p>
      </div>
      <!-- 建设法律 -->
      <div class="fagui" v-show="msg == '建设法律'?true:false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">关于组织开展建筑节能专项检查的通知</p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </p>
      </div>
      <!-- 国务院文件 -->
      <div class="fagui" v-show="msg == '国务院文件'?true:false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">工程建设项目货物招标投标办法(七部委第27号令）</p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </p>
      </div>
      <!-- 部门规章 -->
      <div class="fagui" v-show="msg == '部门规章'?true:false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">《房屋建筑和市政基础设施工程施工图设计文件审查管理办法》</p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="50">
          </el-pagination>
        </p>
      </div>
      <!-- 地方法规 -->
      <div class="fagui" v-show="msg == '地方法规'?true:false">
        <el-row style="margin-bottom:32px;" v-for="item in 5" :key="item">
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">2020</p>
              <p class="md">06/30</p>
            </div>
            <div class="notice fr">
              <p class="title">关于重新发布广州市建设工程招标择优条件的通知</p>
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
      tabs: ["行政法规", "建设法律", "国务院文件", "部门规章", "地方法规"],
      msg: "行政法规"
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
  }
};
</script>
<style lang="scss" scoped>
#policy {
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
    .title {
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
