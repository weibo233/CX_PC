<template>
  <div>
    <banner></banner>
    <div id="enterprise">
      <tabs :tabs="tabs" :Navigation="Navigation"></tabs>
      <zhu :msg="msg"></zhu>
      <!-- 荣誉证书、资质证书 -->
      <el-row v-show="isleft" style="margin-bottom:24px;">
        <el-col
          :span="7"
          style="padding:0 26px;border-right:2px solid #eeee;height:735px;letter-spacing: 2px;"
        >
          <div class="row" v-for="(item, idx) in des" :key="idx">
            <p class="title">{{ item.title }}</p>
            <p class="data">{{ item.data }}</p>
          </div>
        </el-col>
        <el-col :span="17" v-show="msg == '荣誉证书' ? true : false">
          <div class="flexBox">
            <div class="imgbox" v-for="(item, idx) in enterprise" :key="idx">
              <viewer>
                <img
                  :src="item.cover"
                  style="width: 234px;height: 166px; cursor:pointer"
                />
              </viewer>
              <p class="itemtitle">{{ item.title }}</p>
            </div>
          </div>
          <p style="text-align:center;">
            <el-pagination
              layout="prev, pager, next"
              :page-size="honorForm.pageSize"
              :total="honorForm.pageCount"
              @current-change="handleCurrentChangehonor"
            >
            </el-pagination>
          </p>
        </el-col>
        <el-col :span="17" v-show="msg == '资质证书' ? true : false">
          <div class="flexBox">
            <div class="imgbox" v-for="(item, idx) in qualist" :key="idx">
              <viewer>
                <img
                  :src="item.cover"
                  style="width: 234px;height: 166px; cursor:pointer"
                />
              </viewer>
              <p class="itemtitle">{{ item.title }}</p>
            </div>
          </div>
          <p style="text-align:center;">
            <el-pagination
              layout="prev, pager, next"
              :page-size="QualistForm.pageSize"
              :total="QualistForm.pageCount"
              @current-change="handleCurrentChangeQua"
            >
            </el-pagination>
          </p>
        </el-col>
      </el-row>
      <!-- 案例展示 -->
      <div class="projectbox" v-show="msg == '案例展示' ? true : false">
        <el-row class="cxProject" v-for="(item, idx) in project" :key="idx" @click.native="toDetail(item.articleId)">
          <el-col :span="6">
            <!-- <img :src="item.url" alt="" /> -->
            <viewer>
              <img
                :src="item.cover"
                style="width: 100%;height: 186px; cursor:pointer"
              />
            </viewer>
          </el-col>
          <el-col :span="18" style="padding: 16px 40px;">
            <p class="title">
              <span>{{ item.title }}</span>
            </p>
            <p class="covered">
              <span>占地面积:</span>
              <span>{{ item.covered }}</span>
            </p>
            <p class="built-up">
              <span>建筑面积:</span>
              <span>{{ item.built_up }}</span>
            </p>
          </el-col>
          <p class="tip">深圳市成效项目管理有限公司</p>
        </el-row>
        <p style="text-align:center;">
          <el-pagination
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            :page-size="projectForm.pageSize"
            :total="projectForm.pageCount"
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
      Navigation: "",
      tabs: ["荣誉证书", "资质证书", "案例展示"],
      msg: "荣誉证书",
      isleft: true,
      enterprise: [], //荣誉证书
      qualist: [], //资质证书
      des: [
        {
          title: "造价咨询",
          data:
            "工程造价咨询企业依法从事工程造价咨询活动，不收行政区域限制，甲级工程造价咨询企业可从事各类建设项目的工程造价咨询业务"
        },
        {
          title: "招标代理",
          data:
            "工程招标代理企业依法从事工程造价咨询活动，不收行政区域限制，甲级工程造价咨询企业可从事各类建设项目的工程造价咨询业务"
        },
        {
          title: "造价咨询",
          data:
            "工程监理企业依法从事工程监理活动，不受行政区域限制，可承担房屋建筑工程监理乙级，市政公用工程监理乙级业务"
        }
      ],
      project: [], //案例展示
      projectForm: {
        pageCount: 1,
        pageSize: 5,
        categoryId: 10, //工程案例10
        targetPage: 1
      },
      QualistForm: {
        pageCount: 1,
        pageSize: 9,
        categoryId: 8, //资质证书
        targetPage: 1
      },
      honorForm: {
        pageCount: 1,
        pageSize: 9,
        categoryId: 9, //荣誉证书
        targetPage: 1
      }
    };
  },
  methods: {
    getData() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.honorForm
      }).then(res => {
        this.enterprise = res.data.data.resultList;
      });
    },
    //获取工程案例
    //工程案例
    getProject() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.projectForm
      }).then(res => {
        this.project = res.data.data.resultList;
      });
    },
    //荣誉证书
    getQualist() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: this.QualistForm
      }).then(res => {
        this.qualist = res.data.data.resultList;
      });
    },
    handleCurrentChangehonor(val) {
      this.honorForm.targetPage = val;
      this.getData();
    },
    handleCurrentChangeQua(val) {
      this.QualistForm.targetPage = val
      this.getQualist();
    },
    handleCurrentChange(val) {
      this.projectForm.targetPage = val;
      this.getProject();
    },
      //详情
    toDetail(articleId) {
      this.$router.push({
        path: "/detail",
        query: {
          articleId: articleId
        }
      });
    }
  },
  created() {
    if (this.$route.query.type == "3") {
      this.msg = "案例展示";
    }
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.Navigation = this.$router.history.current.name;
    this.getData(); //荣誉证书
    this.getQualist(); //资质证书
    this.getProject();
  },
  watch: {
    msg: function(val) {
      if (val == "案例展示") {
        this.isleft = false;
      } else [(this.isleft = true)];
    }
  }
};
</script>
<style lang="scss" scoped>
#enterprise {
  width: 1200px;
  margin: 0 auto;
  .row {
    margin-bottom: 70px;
    .title {
      font-size: 48px;
      color: rgb(234, 238, 241);
      line-height: 74px;
      letter-spacing: 7px;
    }
    .data {
      font-size: 14px;
      color: rgb(64, 73, 88);
    }
  }
  .flexBox {
    width: 100%;
    padding: 0 26px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    .imgbox {
      width: 250px;
      height: 210px;
      background: rgb(29, 80, 159);
      margin-right: 23px;
      margin-bottom: 24px;
      box-sizing: border-box;
      padding: 8px 8px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      img {
        width: 234px;
        height: 166px;
        background-image: cover;
        margin: 0 auto;
      }
      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
  .projectbox {
    margin-bottom: 50px;
    .cxProject {
      cursor: pointer;
      position: relative;
      height: 190px;
      border: 2px solid #eee;
      margin-bottom: 24px;
      img {
        width: 100%;
        height: 186px;
      }
      .title {
        margin-bottom: 18px;
        span {
          display: block;
          // width: 817px;
          height: 56px;
          font-size: 26px;
          border-bottom: 1px solid #0a0347;
          color: #0a0347;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: left;
        }
      }
      .covered,
      .built-up {
        span {
          font-size: 14px;
          color: #0a0347;
          line-height: 10px;
        }
      }
      .tip {
        position: absolute;
        bottom: 4px;
        right: 6px;
        color: rgb(29, 80, 158);
      }
    }
  }
}

.itemtitle {
  line-height: 30px;
  letter-spacing: 2px;
  color: rgb(234, 238, 241);
}
</style>
