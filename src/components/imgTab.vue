<template>
  <el-row
    style="box-sizing:border-box;padding:20px 0 26px 0;border-bottom:2px dashed #eeee;"
  >
    <el-col :span="10" style="min-height:104px;">
      <viewer>
        <img :src="information.cover" alt="" style="width:100%;height:100px;" />
      </viewer>
    </el-col>
    <el-col :span="12" class="Bidding-data" :offset="2">
      <el-row>
        <el-col
          :span="14"
          class=" fontHover over"
          @click.native="toDetail(information.articleId)"
          >{{ information.title }}</el-col
        >
        <el-col :span="8" :offset="2" class="time">{{
          information.releaseTime.replace(/-/g, "/")
        }}</el-col>
      </el-row>
      <el-row style="padding-top:16px;">
        <p class="desc">
          {{ information.introduce }}
        </p>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    information: {
      type: Object,
      default() {
        return {
          articleId:"",
          title:"",
          releaseTime:"",
          introduce:""
        };
      }
    },
    router: {
      type: String,
      default: "/CorporateNews"
    }
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    // goRoute(roter) {
    //   this.$router.push(roter)
    // }
    replaceStr(str) {
      return str.replace(/-/g, "/");
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
  }
};
</script>
<style lang="scss" scoped>
.bidding-data {
  font-family: "Microsoft YaHei";
  font-size: 12px;
  padding: 10px 0;
  border-bottom: 1px dashed #eee;
  .data {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .time {
    color: #cac3c3;
  }
}
.Bidding-data {
  font-size: 12px;
  letter-spacing: 1px;
}

.fontHover {
  cursor: pointer;
  &:hover {
    color: salmon !important;
  }
}
.over {
  display: block;
  overflow: hidden;
  // width: 40%;
  height: 17px;
  text-overflow: ellipsis;
  // text-align: left;
  color: rgb(128, 128, 128);
}
.time {
  color: #cac3c3;
}
.desc {
  height: 64px;
  text-indent: 2em;
  color: rgb(128, 110, 110);
  overflow: hidden;
   text-overflow: ellipsis;
  display: -webkit-box;
   white-space: pre-wrap;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
//  style="margin-top:20px;margin-bottom:6px;padding-bottom:20px;border-bottom:2px dashed #eeee;"
</style>
