<template>
  <div>
    <banner></banner>
    <div id="render">
      <tabs :tabs="tabs"></tabs>
      <zhu :msg="msg"></zhu>
      <!-- 招标公告 -->
      <div v-show="msg === '招标公告' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in tender"
          :key="item.articleId"
        >
          <el-col :span="23" style="margin-left:26px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr" @click="toDetail(item.articleId)">
              <p class="title">{{ item.title }}</p>
              <p class="data">
                {{ item.introduce }}
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination
            layout="prev, pager, next"
            :page-size="tenderForm.pageSize"
            :total="tenderForm.pageCount"
            @current-change="handleCurrentChangeA"
          >
          </el-pagination>
        </p>
      </div>
      <!-- 资料下载 -->
      <div v-show="msg === '资料下载' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in download"
          :key="item.articleId"
        >
          <el-col :span="23" style="margin-left:26px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr">
              <p class="title">{{ item.title }}</p>
              <p class="data">
                {{ item.introduce }}
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination
            layout="prev, pager, next"
             @current-change="handleCurrentChangeB"
            :page-size="downloadForm.pageSize"
            :total="downloadForm.pageCount"
          >
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
      tenderForm: {
        pageCount: 1,
        pageSize: 5,
        categoryId: 6,//招标公告6
        targetPage:1
      },
      downloadForm: {
        pageCount: 1,
        pageSize: 5,
        categoryId: 7,//资料下载7
        targetPage:1
      },
      TenderpageCount: 1, //招标公告总条数
      TenderpageSize: 10, //招标广告每页条数
      downloadpageCount: 1, //资料下载总条数
      downloadpageSize: 10, //资料下载每页条数
      tabs: ["招标公告", "资料下载"],
      msg: "招标公告",
      tender: "", //招标公告page
      download: "" //资料下载page
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.getTender();
    this.getDownload();
  },
  methods: {
    //详情
    toDetail(articleId) {
      this.$router.push({
        path: "/detail",
        query: {
          articleId: articleId
        }
      });
    },
    //招标公告
    getTender() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.tenderForm
      }).then(res => {
        console.log(res, "---res");
        this.tender = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
        this.tenderForm.pageCount = res.data.data.recordCount * 1;
        this.tenderForm.pageSize = res.data.data.pageSize * 1;
      });
    },
    //资料下载
    getDownload() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.downloadForm
      }).then(res => {
        this.download = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
        this.downloadForm.pageCount = res.data.data.pageCount * 1;
        this.downloadForm.pageSize = res.data.data.pageSize * 1;
      });
    },
    //换页
    handleCurrentChangeA(val) {
      this.tenderForm.targetPage = val
      this.getTender()
    },
    handleCurrentChangeB(val) {
      console.log(123)
      this.downloadForm.targetPage = val;
      this.getDownload()
    }
  }
};
</script>
<style lang="scss" scoped>
#render {
  width: 1200px;
  min-height: 300px;
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
    .title,
    .data {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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
