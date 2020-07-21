<template>
  <div id="detail">
    <el-row>
      <h3 class="title">{{ form.title }}</h3>
      <div class="text">
        <div class="index">
          <span>专栏信息:</span>
          <span class="content">{{ computerTy(form.categoryId) }}</span>
        </div>
        <div class="index">
          <span>发布日期:</span>
          <span class="content">{{ form.releaseTime.slice(0, 10) }}</span>
        </div>
        <div class="index">
          <span>作者</span>
          <span class="content">{{ form.author }}</span>
        </div>
      </div>
      <div id="content"></div>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articleId: "", //文章ID
      form: {
        articleId: "",
        author: "",
        categoryId: "",
        content: "",
        cover: "",
        introduce: "",
        pictures: "",
        releaseTime: "",
        title: ""
      }, //信息
    };
  },
  methods: {
    computerTy(id) {
      console.log(id,"---id")
      if (id == "6") {
        return "招标公告";
      }
      if (id == "7") {
        return "资料下载";
      }
      if (id ==  "8") {
        return "资质证书";
      }
      if (id ==  "9") {
        return "荣誉证书";
      }
      if (id ==  "10") {
        return "工程案例";
      }
      if (id ==  "12") {
        return "行政法规";
      }
      if (id ==  "13") {
        return "建设法律";
      }
      if (id ==  "14") {
        return "国务院文件";
      }
      if (id ==  "15") {
        return "部门规章";
      }
    },
    getDetail(articleId) {
      this.$http({
        method: "post",
        url: "/framework/all/article/detail",
        data: {
          articleId: articleId
        }
      }).then(res => {
        this.form = res.data.data;
        var content = document.getElementById("content")
         content.innerHTML = res.data.data.content
      });
    }
  },
  watch: {
    articleId(val) {
      if (val) {
        this.getDetail(val);
      }
    }
  },
  created() {
    this.articleId = this.$route.query.articleId;
  }
};
</script>
<style lang="scss" scoped>
#detail {
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  .title {
    text-align: center;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px dashed #eee;
  }
  .text {
    margin: 0 auto;
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: center;
    line-height: 42px;
    font-size: 16px;
    .index {
      padding: 0 10px;
      .content {
        margin-left: 5px;
      }
    }
  }
}
</style>
