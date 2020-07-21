<template>
  <div>
    <banner></banner>
    <div id="policy">
      <tabs :tabs="tabs"></tabs>
      <zhu :msg="msg"></zhu>
      <!-- 行政法规 -->
      <div class="fagui" v-show="msg == '行政法规' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in faguilist"
          :key="item.articleId"
        >
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr" @click="toDetail(item.articleId)">
              <p class="title">
                {{ item.title }}
                <!-- 国务院办公厅转发建设部国家计委监察部关于健全和规范有形建筑市场若干意见的通知 -->
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
          <el-pagination layout="prev, pager, next" :total="faguiForm.pageCount" :page-size="faguiForm.pageSize" @current-change="handfaguileCurrentChange">
          </el-pagination>
        </p>
      </div>
      <!-- 建设法律 -->
      <div class="fagui" v-show="msg == '建设法律' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in falvlist"
          :key="item.articleId"
        >
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr" @click="toDetail(item.articleId)">
              <p class="title">
                <!-- 关于组织开展建筑节能专项检查的通知 -->
                {{ item.title }}
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
              <el-pagination layout="prev, pager, next" :total="falvForm.pageCount" :page-size="falvForm.pageSize" @current-change="handfalvleCurrentChange">
          </el-pagination>
        </p>
      </div>
      <!-- 国务院文件 -->
      <div class="fagui" v-show="msg == '国务院文件' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in guowuyuanlist"
          :key="item.articleId"
        >
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr" @click="toDetail(item.articleId)">
              <p class="title">
                {{ item.title }}
                <!-- 工程建设项目货物招标投标办法(七部委第27号令） -->
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
             <el-pagination layout="prev, pager, next" :total="guowuyuanForm.pageCount" :page-size="guowuyuanForm.pageSize"  @current-change="handguowuyuanleCurrentChange">
          </el-pagination>
        </p>
      </div>
      <!-- 部门规章 -->
      <div class="fagui" v-show="msg == '部门规章' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in bumenlist"
          :key="item.articleId"
        >
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr" @click="toDetail(item.articleId)">
              <p class="title">
                <!-- 《房屋建筑和市政基础设施工程施工图设计文件审查管理办法》 -->
                {{ item.title }}
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
              <el-pagination layout="prev, pager, next" :total="bumenForm.pageCount" :page-size="bumenForm.pageSize" @current-change="handbumenleCurrentChange">
          </el-pagination>
        </p>
      </div>
      <!-- 地方法规 -->
      <div class="fagui" v-show="msg == '地方法规' ? true : false">
        <el-row
          style="margin-bottom:32px;"
          v-for="item in difanglist"
          :key="item.articleId"
        >
          <el-col :span="22" style="margin-left:30px;">
            <div class="time fl">
              <p class="y">{{ item.releaseTime.slice(0, 4) }}</p>
              <p class="md">{{ item.releaseTime.slice(5, 10) }}</p>
            </div>
            <div class="notice fr" @click="toDetail(item.articleId)">
              <p class="title">
                {{ item.title }}
                <!-- 关于重新发布广州市建设工程招标择优条件的通知 -->
              </p>
            </div>
          </el-col>
        </el-row>
        <p style="text-align:center;">
              <el-pagination layout="prev, pager, next" :total="difangForm.pageCount" :page-size="difangForm.pageSize" @current-change="handdifangleCurrentChange">
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
      msg: "行政法规",
      faguiForm: {
        categoryId:"12",
        pageCount:1,//总页数
        pageSize:5,//每页的条数
        targetPage:1,//当前页
      }, //行政法规搜索条件
      falvForm:{
        categoryId:"13",
        pageCount:1,//总页数
        pageSize:5,//每页的条数
        targetPage:1,//当前页
      },
      guowuyuanForm:{
        categoryId:"14",
        pageCount:1,//总页数
        pageSize:5,//每页的条数
        targetPage:1,//当前页
      },
      bumenForm:{
        categoryId:"15",
        pageCount:1,//总页数
        pageSize:5,//每页的条数
        targetPage:1,//当前页
      },
      difangForm:{
        categoryId:"16",
        pageCount:1,//总页数
        pageSize:5,//每页的条数
        targetPage:1,//当前页
      },
      faguilist:[],//行政法规
      falvlist: [], //建设法律
      guowuyuanlist: [], //国务院文件
      bumenlist: [], //部门规章
      difanglist: [], //地方法规
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.getFagui(); //行政法规
    this.getfalv(); //建设法律
    this.getguowuyuan(); //国务院文件
    this.getbumen(); //部门规章
    this.getdifang(); //地方法规
  },
  methods: {
    getFagui() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.faguiForm
      }).then(res => {
        this.faguilist = res.data.data.resultList;
      });
    },
    getfalv() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data:  this.falvForm
      }).then(res => {
        this.falvlist = res.data.data.resultList;
      });
    },
    getguowuyuan() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data:this.guowuyuanForm
      }).then(res => {
        this.guowuyuanlist = res.data.data.resultList;
      });
    },
    getbumen() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.bumenForm
      }).then(res => {
        this.bumenlist = res.data.data.resultList;
      });
    },
    getdifang() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data:this.difangForm
      }).then(res => {
        this.difanglist = res.data.data.resultList;
      });
    },
    //行政法规cahngge
    handfaguileCurrentChange(val) {
      this.faguiForm.targetPage = val
      this.getFagui()
    },
    //法律
    handfalvleCurrentChange(val) {
      this.falvForm.targetPage = val
      this.getfalv()
    },
    //国务院
    handguowuyuanleCurrentChange(val) {
      this.guowuyuanForm.targetPage = val
      this.getguowuyuan()
    },
    //部门
    handbumenleCurrentChange(val) {
      this.bumenForm.targetPage = val
      this.getbumen()
    },
    handdifangleCurrentChange(val){
      this.difangForm.targetPage = val
      this.getdifang()
    },
     //详情
    toDetail(articleId) {
      this.$router.push({
        path:"/detail",
        query:{
          articleId:articleId
        }
      })
    },
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
