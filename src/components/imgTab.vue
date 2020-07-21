<template>
  <el-row
    style="box-sizing:border-box;padding:20px 0 26px 0;border-bottom:2px dashed #eeee;"
  >
    <el-col :span="10">
      <img :src="information.cover" alt="" style="width:100%;height:100px;" />
    </el-col>
    <el-col :span="12" class="Bidding-data" :offset="2">
      <p>
        <span
          class="fl fontHover over"
          @click="toDetail(information.articleId)"
          >{{ information.title }}</span
        >
        <span class="fr" style="color:#cac3c3;">{{
          information.releaseTime
        }}</span>
      </p>
      <p
        style="text-indent:2em; margin-top:28px;color:rgb(128, 110, 110);overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
white-space:pre-wrap;
-webkit-box-orient:vertical;  
-webkit-line-clamp:4;"
      >
        {{ information.content }}
      </p>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    information: {
      type: Object,
      default() {
        return {};
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
  width: 100%;
  height: 32px;
  text-overflow: ellipsis;
  text-align: left;
  color: rgb(128, 128, 128);
}
//  style="margin-top:20px;margin-bottom:6px;padding-bottom:20px;border-bottom:2px dashed #eeee;"
</style>
