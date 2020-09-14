<template>
  <el-row class="cx_Tender" style="padding:0 24px;">
    <tab title="工程案例" router="/enterprise?type=3"/>
    <div style="margin-top:48px;">
      <carrousel :carrouselData="carrouselData"></carrousel>
    </div>
  </el-row>
</template>
<script>
import carrousel from "@/components/mycarrousel";
import tab from "@/components/tab";
export default {
  components: {
    tab,
    carrousel
  },
  data() {
    return {
      carrouselData: []
    };
  },
  methods: {
    //工程案例
    getProject() {
      this.$http({
        method: "post",
        url: "/framework/all/article/page",
        data: {
          categoryId: "10", //10工程案例
          onlineFlag: 1
        }
      }).then(res => {
          this.carrouselData = res.data.data.resultList
          // console.log(res,'工程案例')
      });
    }
  },
  created() {
    this.getProject();
  }
};
</script>
<style lang="scss" scoped></style>
