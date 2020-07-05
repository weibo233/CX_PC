<template>
  <div>
    <el-row class="banner">
      <el-carousel height="700px">
        <el-carousel-item v-for="(item, idx) in bannerimg" :key="idx">
          <img :src="item.url" alt="" />
        </el-carousel-item>
      </el-carousel>
    </el-row>
    <div class="content center" style="margin-top:80px;">
      <el-row :gutter="40">
        <el-col :span="6">
          <tab title="企业荣誉"></tab>
          <el-carousel
            height="316px"
            arrow="never"
            style="margin-top:15px;"
            class="rongyu"
          >
            <el-carousel-item v-for="(item, idx) in rongyu" :key="idx">
              <img :src="item.url" alt="" />
              <p class="rongyu-title">{{ item.title }}</p>
            </el-carousel-item>
          </el-carousel>
        </el-col>
        <el-col :span="12">
          <tab title="招标信息"></tab>
          <el-row
            class="bidding-data fontHover"
            v-for="(item, idx) in bidInf"
            :key="idx"
            :title="item.data"
            :gutter="10"
          >
            <el-col :span="18" class="data"> {{ item.data }}</el-col>
            <el-col :span="4" class="fr time">{{ item.time }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <tab title="收费标准"></tab>
          <el-row
            class="bidding-data fontHover"
            v-for="(item, idx) in charge"
            :key="idx"
            :title="item.data"
          >
            <el-col :span="12" class="data">{{ item.data }}</el-col>
            <el-col :span="7" class="fr time">{{ item.time }}</el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row :gutter="40" style="margin-top:80px;">
        <el-col :span="8" class="t510">
          <tab title="企业新闻"></tab>
          <img-tab :information="Bidding_data" />
          <el-row
            class="fontHover"
            style="box-sizing:border-box;padding:14px 0;text-align:center;font-size:10px;height:48px;border-bottom:2px dashed #eee;color: rgb(128,128,128);"
            v-for="(item, idx) in Bidding"
            :key="idx"
          >
            <el-col :span="16" class="more_than">{{ item.title }}</el-col>
            <el-col :span="6" :offset="2" class="fr" style="color:#cac3c3;">{{ item.date }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="10" class="t510">
          <tab title="行业新闻"></tab>
          <img-tab :information="Bidding_data" />
          <el-row
            class="fontHover"
            style="box-sizing:border-box;padding:14px 0;text-align:center;font-size:10px;height:48px;border-bottom:2px dashed #eee;color: rgb(128,128,128);"
            v-for="(item, idx) in Bidding"
            :key="idx"
          >
            <el-col :span="16" class="more_than">{{ item.title }}</el-col>
            <el-col :span="6" :offset="2" class="fr" style="color:#cac3c3;">{{ item.date }}</el-col>
          </el-row>
        </el-col>
        <el-col :span="6" class="t510">
          <tab :BG="true" title="企业视频"></tab>
          <!-- <img src="@/assets/images/home/cx.jpg" alt=""> -->
          <video
            preload="preload"
            controls="controls"
            class="tinyScreenVideo"
            style="height: 178px; width: 270px;"
            poster="@/assets/images/home/cx.jpg"
          >
            <source
              src="https://mazwai.com/videvo_files/video/free/2016-01/small_watermarked/test_flight_preview.webm"
              type="video/mp4"
            />
            您的浏览器不支持 video 标签。
          </video>
          <tab :BG="true" title="联系我们" :top="40"></tab>
          <div style="box-sizing:border-box;padding:15px 22px;">
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
        </el-col>
      </el-row>
     <tender/>
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
      bannerimg: [
        {
          url: require("@/assets/images/main/big_banner5.jpg")
        },
        {
          url: require("@/assets/images/main/big_banner3.jpg")
        },
        {
          url: require("@/assets/images/main/big_banner2.jpg")
        },
        {
          url: require("@/assets/images/main/big_banner4.jpg")
        },
        {
          url: require("@/assets/images/main/big_banner1.jpg")
        }
      ],
      bidInf: [
        {
          data: "2008年1月通过ISO9001:2000国际质量管理体系认证",
          time: "2020/08/21"
        },
        {
          data:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          time: "2020/04/23"
        },
        {
          data: "2008年1月通过ISO9001:2000国际质量管理体系认证",
          time: "2020/08/21"
        },
        {
          data:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          time: "2020/04/23"
        },
        {
          data: "2008年1月通过ISO9001:2000国际质量管理体系认证",
          time: "2020/08/21"
        },
        {
          data:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          time: "2020/04/23"
        },
        {
          data: "2008年1月通过ISO9001:2000国际质量管理体系认证",
          time: "2020/08/21"
        },
        {
          data:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          time: "2020/04/23"
        }
      ],
      charge: [
        {
          data: "造价咨询服务收费标准",
          time: "2020/07/03"
        },
        {
          data: "施工监理服务收费标准",
          time: "2020/03/05"
        },
        {
          data: "造价咨询服务收费标准",
          time: "2020/06/08"
        },
        {
          data: "杨银冰你是不是傻",
          time: "2020/06/08"
        }
      ],
      rongyu: [
        {
          url: require("@/assets/images/home/b7eff10bcbaf334377dd7f57eca1177.jpg"),
          title: "优秀工程造价咨询企业荣誉称号"
        },
        {
          url: require("@/assets/images/home/8ab413084d55a188a140e72365bee59.jpg"),
          title: "优秀工程造价咨询企业荣誉称号"
        },
        {
          url: require("@/assets/images/home/77d4a16c69d51748bcbb4fdb43e33fa.jpg"),
          title: "优秀工程造价咨询企业荣誉称号"
        },
        {
          url: require("@/assets/images/home/8772d70c97a7898a8aabcea518ce3f5.jpg"),
          title: "优秀工程造价咨询企业荣誉称号"
        },
        {
          url: require("@/assets/images/home/8ab413084d55a188a140e72365bee59.jpg"),
          title: "优秀工程造价咨询企业荣誉称号"
        },
        {
          url: require("@/assets/images/home/42591aff9da9213120483a5dc9cca5a.jpg"),
          title: "优秀工程造价咨询企业荣誉称号"
        }
      ],
      Bidding_data: {
        url: require("@/assets/images/home/project/project1.jpg"),
        title: "广东省建筑业协会",
        time: "2020/06/27",
        data:
          " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
      },
      Bidding: [
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        },
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        },
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        },
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        },
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        },
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        },
        {
          title:
            "是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位",
          date: "2020/07/23"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.fontHover {
  cursor: pointer;
  *{
  &:hover {
    color: salmon !important;
  }

  }
}
.banner {
  img {
    width: 100%;
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
  .bidding-data {
    font-family: "微软雅黑";
    font-size: 12px;
    padding: 10px 0;
    border-bottom: 1px dashed #eee;

    .data {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: rgb(128,128,128);
    }
    .time {
      color: #cac3c3;
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
}

.cx_Tender  {
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
    color: #847e7e;
  }
}
.emaill {
  margin-top: 20px;
}

.t510 {
  height: 510px;
}

</style>
