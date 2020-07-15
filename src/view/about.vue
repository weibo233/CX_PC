<template>
  <div>
    <banner></banner>
    <div id="about">
      <tabs :tabs="tabs" :Navigation="Navigation"></tabs>
      <zhu :msg="msg"></zhu>
      <el-row class="data">
        <left-tab></left-tab>
        <el-col
          :span="16"
          class="introduction"
          v-show="msg === '公司简介' ? true : false"
        >
          <p>
            深圳市成效项目管理有限公司，成立于2006年，注册资金1300万元，是一家具有建设工程造价咨询，招标代理,工程监理，项目管理的综合性企业。2008年一月通过ISO9001：20000国际质量管理体系认证，是广东省建筑就业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设市建设项目管理协会创会会员单位。公司具备一下多项资源：
          </p>
          <p>
            工程造价咨询甲级、工程招标代理乙级、房屋建筑工程监理乙级、市用公用工程监理乙级
          </p>
          <p>
            公司经营管理班子拥有80多名各类国家注册的造价工程师，监理工程师，建造师及持证上岗专业技术人员；其中高级工程师18名，中级职称35名；各专业技术人才配备齐全，团队稳定。
          </p>
          <p>
            公司除了在传统业务上精益求精，力求为客户带来更优质的服务的同时，也非常关注行业新技术的发展，特别是BIM和建筑产业化，公司成立了BIM咨询部，与国内顶级BIM咨询公司合作，培养和储备人才，探索BIM技术与传统造价业务的对接与拓展。为客户提供更高端的鼓舞，创造更大的价值！
          </p>
          <p>
            经过十来年的发展，公司已形成以深圳为中心，覆盖广东、湖南、湖北、四川、安徽省的服务网络，能为全国各地政府、开发单位，建筑单位提供专业的造价咨询与招标代理服务。
          </p>
          <p>
            深圳市成效项目管理有限公司坚持以诚信经营、优质服务为宗旨，重视品牌战略，创新经营理念，完善管理机制，创新人才管理。愿与国内各界同仁精诚合作，以优质精品服务回报社会，共创美好未来！
          </p>
        </el-col>
        <el-col
          :span="16"
          class="introduction"
          v-show="msg === '企业文化' ? true : false"
        >
          <span v-for="item in 300" :key="item">企业文化</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import Bus from "@/until/bus.js";
import banner from "@/components/smallcarrousel";
import tabs from "@/components/tabs";
import zhu from "@/components/zhu";
import leftTab from "@/components/leftdes";
export default {
  components: {
    banner,
    tabs,
    zhu,
    leftTab
  },
  data() {
    return {
      Navigation: "",
      tabs: ["公司简介", "企业文化"],
      msg: "公司简介"
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
    this.Navigation = this.$router.history.current.name;
  }
};
</script>
<style lang="scss" scoped>
#about {
  width: 1200px;
  margin: 0 auto;
  .data {
    margin-bottom: 228px;
    .accoumnt {
      font-size: 38px;
      color: rgb(243, 154, 50);
      vertical-align: middle;
    }
    .address {
      font-size: 12px;
      line-height: 20px;
      display: inline-block;
      vertical-align: middle;
    }
    .introduction {
      padding: 38px 46px;
      color: rgb(64, 73, 88);
      border-left: 2px solid rgba(128, 128, 128, 0.933);
      p {
        text-indent: 2em;
        font-size: 18px;
        color: rgb(97, 97, 97);
        line-height: 32px;
      }
      span {
        display: inline-block;
        font-size: 18px;
        color: rgb(97, 97, 97);
        line-height: 32px;
      }
    }
  }
}
</style>
