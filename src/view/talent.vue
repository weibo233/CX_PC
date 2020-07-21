<template>
  <div>
    <banner></banner>
    <div id="talent">
      <tabs :tabs="tabs"></tabs>
      <zhu :msg="msg"></zhu>
      <el-row
        style="margin-bottom:32px;"
        v-for="item in talent"
        :key="item.articleId"
      >
        <el-col :span="22" style="margin-left:30px;">
          <div class="time fl">
            <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
            <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
          </div>
          <div class="notice fr">
            <p class="title">
              【招贤纳士】深圳成效项目管理有限公司诚聘监理及造价英才！
            </p>
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
      tabs: ["人才招聘"],
      msg: "人才招聘",
      talent: []
    };
  },
  methods: {
    getData() {
      this.$http({
        method: "post",
        url: "framework/all/article/page",
        data: {
          categoryId: "21", //21 人才招聘
          onlineFlag: 1
        }
      }).then(res => {
        this.talent = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
      });
    }
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.getData()
  }
};
</script>
<style lang="scss" scoped>
#talent {
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
