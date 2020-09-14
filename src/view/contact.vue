<template>
  <div>
    <banner></banner>
    <div id="contact">
      <tabs :tabs="tabs" :Navigation="Navigation"></tabs>
      <zhu :msg="msg"></zhu>
      <el-row class="data" v-show="msg == '联系我们' ? true : false" style="padding-bottom:100px;">
        <left-tab></left-tab>
        <el-col
          :span="16"
          style="padding:38px 56px;border-left: 2px solid rgba(194,194,194,0.933);"
        >
          <div class="Fbox">
            <p class="title">深圳市成效项目管理有限公司</p>
          </div>
          <!-- 公司 -->
          <div class="box" v-for="(item, idx) in content" :key="idx">
            <p class="title" v-if="item.name">
              <span class="name">公司名称：</span>
              <span class="data">{{ item.name }}</span>
            </p>
            <p class="adress" v-if="item.address">
              <span>公司地址：</span>
              <span>{{ item.address }}</span>
            </p>
            <p class="emaill" v-if="item.emaill">
              <span>公司邮箱：</span>
              <span>{{ item.emaill }}</span>
            </p>
            <div class="contact" v-if="item.telephone">
              <p class="contact1">
                <span>联系方式</span>
                <span>{{ item.telephone }}</span>
              </p>
              <p class="contact2" v-if="item.fax">
                <span>传真：</span>
                <span>{{ item.fax }}</span>
              </p>
              <p class="contact2" v-if="item.phone">
                <span>手机号：</span>
                <span>{{ item.phone }}</span>
              </p>
            </div>
          </div>
        </el-col>
      </el-row>
      <baidumap v-show="msg == '电子地图' ? true : false"></baidumap>
    </div>
  </div>
</template>
<script>
import Bus from "@/until/bus.js";
import banner from "@/components/smallcarrousel";
import tabs from "@/components/tabs";
import zhu from "@/components/zhu";
import leftTab from "@/components/leftdes";
import baidumap from "@/components/baidumap";
export default {
  components: {
    banner,
    tabs,
    zhu,
    leftTab,
    baidumap
  },
  data() {
    return {
      tabs: ["联系我们", "电子地图"],
      msg: "联系我们",
      content: [
        {
          address: "", //公司地址
          companyId: "", //标识
          email: "", //邮箱
          fax: "", //传真
          name: "", //企业名称
          phone: "", //手机号
          telephone: "" //联系电话
        }
      ]
      // j: [
      //   {
      //     name: "深圳市成效项目管理有限公司",
      //     adress: "深圳市福田区莲花街道景田南住宅小区综合楼南侧二楼201",
      //     emaill: "szcxzj@21cn.com",
      //     mode: "0755-83948356",
      //     Fax: "0755-83948355"
      //   },
      //   {
      //     name: "深圳市成效项目管理有限公司龙岗分公司",
      //     adress: "深圳市龙岗区龙城街道龙平西路157-27",
      //     emaill: "szsanyi368@126.com",
      //     mode: "0755-28219945",
      //     Fax: ""
      //   },
      //   {
      //     name: "深圳市成效项目管理有限公司安徽分公司",
      //     adress: "安徽省合肥市包河区包河大道368号滨江花月三期办公楼金座908座",
      //     emaill: "170806898@qq.com",
      //     mode: "0551-62626808、13329013396",
      //     Fax: "（0551）63632380"
      //   },
      //   {
      //     name: "深圳市成效项目管理有限公司梅州分公司",
      //     adress: "广东省梅州市梅江区彬芳大道南园MD2栋1-2层商铺",
      //     emaill: "13823885656@163.com",
      //     mode: "0753-2326369",
      //     Fax: "0753-2326369"
      //   },
      //   {
      //     name: "深圳市成效项目管理有限公司东莞分公司",
      //     adress: "广东省东莞市横沥镇双龙舫步行街八号楼（南方电网对面）",
      //     emaill: "6149345@qq.com",
      //     mode: "13322936793",
      //     Fax: "0769-82830888"
      //   }
      // ]
    };
  },
  methods: {
    getData() {
      this.$http({
        method: "post",
        url: "/framework/all/subject/info",
        data: {}
      }).then(res => {
        // console.log(res);
      });
    },
    getCompanyData() {
      this.$http({
        method: "post",
        url: "/framework/all/company/list",
        data: {}
      }).then(res => {
        this.content = res.data.data;
      });
    }
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.Navigation = this.$router.history.current.name;
    // this.getData()
    this.getCompanyData();
  }
};
</script>
<style lang="scss" scoped>
#contact {
  width: 1200px;
  margin: 0 auto;
  .Fbox,
  .box {
    * {
      letter-spacing: 1px;
      color: rgb(64, 73, 88);
    }
  }
  .Fbox {
    margin-bottom: 24px;
    .title {
      font-size: 20px;
      font-weight: 700;
    }
  }
  .box {
    font-size: 16px;
    margin-bottom: 48px;
    &:last-child {
      margin-bottom: 24px;
    }
    .title {
      font-size: 18px;
      font-weight: 700;
      .name {
        font-size: 20px;
        font-weight: 700;
      }
    }
    .contact {
      .contact1 {
        margin-right: 16px;
      }
    }
  }
}
</style>
