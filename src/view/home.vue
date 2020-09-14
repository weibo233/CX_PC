<template>
  <div>
    <el-row class="banner">
      <el-carousel height="700px" class="home-banner" indicator-position="outside">
        <el-carousel-item v-for="(item, idx) in bannerimg" :key="idx">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <div class="content center" style="margin-top:80px;">
      <el-row :gutter="40">
        <!-- 企业荣誉 -->
        <el-col :span="6">
          <tab title="企业荣誉" router="/enterprise"></tab>
          <el-carousel
            height="316px"
            arrow="never"
            style="margin-top:15px;"
            class="rongyu"
          >
            <el-carousel-item v-for="(item, idx) in honor" :key="idx">
              <img :src="item.cover" alt="" />
              <p class="rongyu-title">{{ item.title }}</p>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <!-- 招标信息 -->
        <el-col :span="12">
          <tab title="招标信息" router="/tender"></tab>
          <el-row
            class="bidding"
            v-for="(item, idx) in ZBGG"
            :key="idx"
            :title="item.title"
            :gutter="10"
            @click.native="toDetail(item.articleId)"
          >
            <el-col :span="18" class="data"> {{ item.title }}</el-col>
            <el-col :span="4" class="fr time">{{ item.releaseTime }}</el-col>
          </el-row>
        </el-col>
        <!-- 收费标准 -->
        <el-col :span="6">
          <tab title="收费标准" router="/charging"></tab>
          <el-row
            class="charge"
            v-for="(item, idx) in charge"
            :key="idx"
            :title="item.title"
            @click.native="toDetail(item.articleId)"
          >
            <el-col :span="12" class="data">{{ item.title }}</el-col>
            <el-col :span="7" class="fr time">{{ item.releaseTime }}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- next -->
      <el-row :gutter="40" style="margin-top:80px;">
        <!-- 企业新闻 -->
        <el-col :span="8" class="t510">
          <tab title="企业新闻" :ismore="false"></tab>
          <img-tab :information="companyNotice[0]" router="/CorporateNews" />
          <el-row
            class="corporatenews"
            v-for="(item, idx) in companyNotice"
            :key="idx"
            @click.native="toDetail(item.articleId)"
          >
            <el-col :span="16" class="more_than">{{ item.introduce }}</el-col>
            <el-col :span="6" :offset="2" class="fr" style="color:#cac3c3;">
             {{ replaceStr(item.releaseTime)}}
            </el-col>
          </el-row>
        </el-col>
        <!-- 行业新闻 -->
        <el-col :span="10" class="t510">
          <tab title="行业新闻" :ismore="false"></tab>
          <img-tab :information="IndustryNews[0]" router="/IndustryNews" />
          <el-row
            class="industrynews"
            v-for="(item, idx) in IndustryNews"
            :key="idx"
             @click.native="toDetail(item.articleId)"
          >
            <el-col :span="16" class="more_than">{{ item.introduce }}</el-col>
            <el-col :span="6" :offset="2" class="fr" style="color:#cac3c3;">{{
              item.releaseTime
            }}</el-col>
          </el-row>
        </el-col>
        <!-- 企业视频 -->
        <el-col :span="6" class="t510">
          <div style="border:2px solid rgb(162, 151, 151)">
            <tab :BG="true" title="企业视频"></tab>
            <video
              :src="videoSrc"
              controls="controls"
              width="267"
              height="178"
              style="width= 100%; height=100%; object-fit: fill"
              poster="@/assets/images/home/cx.jpg"
            ></video>
          </div>
          <div style="border:2px solid rgb(162, 151, 151); margin-top:40px;">
            <tab :BG="true" title="联系我们"></tab>
            <div
              style="box-sizing:border-box;padding:15px 10px;letter-spacing:1px;"
            >
              <p class="address">
                <span>公司地址：</span>
                <span>深圳市福田区莲花街道景田南住宅小区综合楼南侧二楼201</span>
              </p>
              <p class="emaill">
                <span>公司邮箱：</span>
                <span>szcxzj@21cn.com</span>
              </p>
              <p class="contact">
                <span>联系方式：</span>
                <span>0755-83948356</span>
              </p>
              <p class="fax">
                <span>传真：</span>
                <span>0755-83498355</span>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
      <tender />
    </div>
  </div>
</template>
<script>
import tab from "@/components/tab";
import imgTab from "@/components/imgTab";
import tender from "@/components/tender";
export default {
  components: {
    tab,
    imgTab,
    tender
  },
  data() {
    return {
      videoSrc: "", //视频路径
      ZBGG: [], //招标公告
      charge: [], //收费标准
      companyNotice: [], //企业新闻
      IndustryNews: [], //行业新闻
      honor: [], //荣誉证书
      charge: [], //收费标准
      bannerimg: [
        {
          url: require("@/assets/images/main/big_banner3.jpg")
        },
        {
          url: require("@/assets/images/main/big_banner2.jpg")
        },
        {
          url: require("@/assets/images/main/big_banner4.jpg")
        }
      ]
    };
  },
  methods: {
    replaceStr(str) {
      return str.replace(/-/g,'/')
    },
    //获取视频链接
    getData() {
      this.$http({
        method: "post",
        url: "/framework/all/subject/info",
        data: {}
      }).then(res => {
        this.videoSrc = res.data.data.strify;
        //  src="https://mazwai.com/videvo_files/video/free/2016-01/small_watermarked/test_flight_preview.webm"
      });
    },
    //获取招标公告
    getZBXX() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: {
          categoryId: "6", //6-招标公告
          onlineFlag: 1
        }
      }).then(res => {
        this.ZBGG = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
      });
    },
    //收费标准
    getCharge() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: {
          categoryId: "18", //18-收费标准
          onlineFlag: 1
        }
      }).then(res => {
        this.charge = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
        // console.log(res,"收费标准")
      });
    },
    //企业新闻
    getCompany() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: {
          categoryId: "17", //18-收费标准 17-企业
          onlineFlag: 1
        }
      }).then(res => {
        let  companyNotice = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
        this.companyNotice = companyNotice.slice(0,6)
      });
    },
    //行业新闻
    getIndustryNews() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: {
          categoryId: "19", //18-收费标准 17-企业
          onlineFlag: 1
        }
      }).then(res => {
        let IndustryNews = res.data.data.resultList.map(item => {
          item.releaseTime = item.releaseTime.slice(0, 10);
          return {
            ...item
          };
        });
        this.IndustryNews = IndustryNews.slice(0,6)
      });
    },
    //荣誉证书
    gethonor() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: {
          categoryId: "9", //9-荣誉证书 17-企业
          onlineFlag: 1
        }
      }).then(res => {
        this.honor = res.data.data.resultList.slice(0,6);
      });
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
    this.getData();
    this.getZBXX();
    this.getCharge();
    this.getCompany();
    this.getIndustryNews();
    this.gethonor();
  }
};
</script>
<style lang="scss" scoped>
.fontHover {
  cursor: pointer;
  &:hover {
    color: salmon !important;
  }
}
.banner {
  .home-banner{
    width: 1197px;
    margin: 0 auto;
    img {
      width: 100%;
    }
  }
}
.center {
  margin-top: 80px;
  >>> .rongyu {
    .el-carousel__indicators--horizontal {
      bottom: 65px;
      .el-carousel__indicator--horizontal {
        padding: 0 2px;
        .el-carousel__button {
          width: 16px;
        }
      }
    }
    .rongyu-title {
      height: 50px;
      background: rgb(29, 80, 158);
      text-align: center;
      line-height: 36px;
      color: #fff;
    }
  }
  img {
    width: 270px;
    height: 200px;
  }
  //招标信息、收费标准
  .charge,
  .bidding {
    font-family: "微软雅黑";
    font-size: 12px;
    padding: 10px 0;
    border-bottom: 1px dashed #eee;
    letter-spacing: 1px;
    cursor: pointer;
    :hover {
      color: salmon !important;
    }
    .data {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgb(128, 128, 128);
    }
    .time {
      color: #cac3c3;
    }
  }
  // 企业新闻、行业新闻
  .corporatenews,
  .industrynews {
    letter-spacing: 1px;
    box-sizing: border-box;
    padding: 14px 0;
    text-align: center;
    font-size: 10px;
    height: 48px;
    border-bottom: 2px dashed #eee;
    color: rgb(128, 128, 128);
    cursor: pointer;
    &:hover {
      color: salmon !important;
    }
  }
}

.el-carousel__button {
  width: 8px;
}
.more_than {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.cx_Tender {
  margin-top: 80px;
  height: 400px;
  box-sizing: border-box;
  border: 1px solid rgb(216, 212, 212);
}

.address,
.emaill,
.contact,
.fax {
  * {
    font-size: 14px;
    line-height: 24px;
    color: #494747;
  }
}
.emaill {
  margin-top: 20px;
}

.t510 {
  height: 510px;
}

.tinyScreenVideo {
  object-fit: fill;
}
</style>
