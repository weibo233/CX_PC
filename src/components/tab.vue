<template>
  <div :style="`padding: 0 ${padding}px;`">
    <p v-if="!BG" class="tabP">
      <span class="fl title">{{ title }}</span>
      <span class="fr more" @click="goRouter(router)" v-if="ismore">更多>>></span>
    </p>
    <p v-if="BG" class="tabB" :style="`margin-top:${top}px;`">
      <span class="fl title">{{ title }}</span>
    </p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    BG: {
      type: Boolean,
      default: false
    },
    top:{
      type:Number,
      default:0
    },
    padding:{
      type:Number,
      default:0
    },
    router:{
      type:String,
      default:""
    },
    ismore:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {};
  },
  methods:{
    goRouter(e) {
      this.$router.push(e)
    }
  }
};
</script>
<style lang="scss" scoped>
.tabP,
.tabB {
  letter-spacing: 2px;
  .more {
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
  }
}
.tabP {
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid rgb(194, 192, 197);
  box-sizing: border-box;
  // margin-top: 80px;
  .title {
    display: inline-block;
    font-size: 22px;
    height: 48px;
    font-family: "Microsoft YaHei";
    color: rgb(128,128,128);
    border-bottom: 4px solid rgb(31, 78, 168);
    letter-spacing: 3px;
  }
  .more {
    font-size: 16px;
    color: #f20f;
    cursor: pointer;
  }
}
.tabB {
  height: 52px;
  line-height: 52px;
  // margin-top: 80px;
  background: rgb(29, 80, 159);
  .title {
    display: inline-block;
    font-size: 22px;
    height: 50px;
    font-family: "微软雅黑";
    color: #fff;
    text-indent: 1ex;
  }
}
</style>
