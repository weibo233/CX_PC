<template>
  <div>
    <banner></banner>
    <div id="policy">
      <tabs :tabs="tabs"></tabs>
      <zhu :msg="msg"></zhu>
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
      tabs: ["政策文件"],
      msg: "政策文件"
    };
  },
  created() {
    Bus.$on("setMsg", content => {
      this.msg = content;
    });
  }
};
</script>
<style lang="scss" scoped>
#policy {
  width: 1200px;
  margin: 0 auto;
}
</style>
