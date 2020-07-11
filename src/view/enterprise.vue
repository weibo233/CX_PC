<template>
  <div>
    <banner></banner>
    <div id="enterprise">
      <tabs :tabs="tabs" :Navigation="Navigation"></tabs>
      <zhu :msg="msg"></zhu>
      <!-- 荣誉证书、资质证书 -->
      <el-row v-show="isleft"  style="margin-bottom:24px;">
        <el-col
          :span="7"
          style="padding:0 47px;border-right:2px solid #eeee;height:735px;"
        >
          <div class="row" v-for="(item, idx) in des" :key="idx">
            <p class="title">{{ item.title }}</p>
            <p class="data">{{ item.data }}</p>
          </div>
        </el-col>
        <el-col
          :span="17"
          style="padding:0 26px;"
          v-show="msg == '荣誉证书' ? true : false"
        >
          <div class="imgbox fl" v-for="(item, idx) in en" :key="idx">
            <img :src="item.url" alt="" />
            <p class="itemtitle">{{ item.title }}</p>
          </div>
        </el-col>
        <el-col
          :span="17"
          style="padding:0 26px;"
          v-show="msg == '资质证书' ? true : false"
        >
          <div class="imgbox fl" v-for="(item, idx) in dn" :key="idx">
            <img :src="item.url" alt="" />
            <p class="itemtitle">{{ item.title }}</p>
          </div>
        </el-col>
      </el-row>
      <!-- 案例展示 -->
      <div class="projectbox" v-show="msg =='案例展示'?true:false">
        <el-row class="cxProject" v-for="(item,idx) in project" :key="idx">
          <el-col :span="6">
            <img :src="item.url" alt="" />
          </el-col>
          <el-col :span="18" style="padding: 16px 40px;">
            <p class="title">
              <span>{{item.title}}</span>
            </p>
            <p class="covered">
              <span>占地面积:</span>
              <span>{{item.covered}}</span>
            </p>
            <p class="built-up">
              <span>建筑面积:</span>
              <span>{{item.built_up}}</span>
            </p>
          </el-col>
          <p class="tip">深圳市成效项目管理有限公司</p>
        </el-row>
         <p style="text-align:center;">
        <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
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
      Navigation:"",
      tabs: ["荣誉证书", "资质证书", "案例展示"],
      msg: "荣誉证书",
      isleft: true,
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
      en: [
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        },
        {
          url: require("@/assets/images/enterprise/enn.jpg"),
          title: "工程造价咨询"
        }
      ],
      dn: [
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        },
        {
          url: require("@/assets/images/enterprise/en.jpg"),
          title: "工程造价证书"
        }
      ],
      project:[
        {
          title:"保利达.江湾南岸花园",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project1.jpg")
        },
        {
          title:"佛山金地九龙壁",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project2.jpg")
        },
        {
          title:"佛山千灯湖.千灯墅",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project3.jpg")
        },
        {
          title:"恒大花园",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project1.jpg")
        },
        {
          title:"保利达.江湾南岸花园",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project1.jpg")
        },
        {
          title:"佛山金地九龙壁",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project2.jpg")
        },
        {
          title:"佛山千灯湖.千灯墅",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project3.jpg")
        },
        {
          title:"恒大花园",
          covered:"146000000平方米",
          built_up:"720000000平方米",
          url:require("@/assets/images/home/project/project1.jpg")
        },
      ]
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.Navigation = this.$router.history.current.name
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
    }
    .data {
      font-size: 14px;
      color:rgb(64,73,88);
    }
  }
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
    color: blanchedalmond;
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
        height: 190px;
      }
      .title {
        margin-bottom: 18px;
        span {
          font-size: 26px;
          border-bottom: 1px solid #0a0347;
          color: #0a0347;
          padding-bottom:16px;
          display: inline-block;
        }
      }
      .covered,.built-up{
        span{
        font-size: 14px;
        color: #0a0347;
        line-height: 10px;
        }
      }
      .tip {
        position: absolute;
        bottom: 4px;
        right: 6px;
        color: #404a77;
      }
    }
  }
}

.itemtitle{
  line-height: 30px;
}
</style>
