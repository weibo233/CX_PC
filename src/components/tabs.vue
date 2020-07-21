<template>
  <el-row class="top">
    <el-col :span="6" class="breadcrumb">
      <p>
        <span style="margin-right:11%;color:rgb(73,64,88);">{{Navigation}}</span>
        <i></i>
        <span class="hover">{{ title }}</span>
      </p>
    </el-col>
    <el-col :span="18"  class="tab-title">
      <span
        v-for="(item, idx) in tabs"
        :key="idx"
        @click="choose(item, idx)"
        :class="active == idx ? 'active' : ''"
        >{{ item }}</span
      >
    </el-col>
  </el-row>
</template>
<script>
import Bus from "@/until/bus.js";
export default {
  props: {
    Navigation:{
      type:String,
      default:"关于我们"
    },
    tabs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      title: this.tabs[0],
      active: 0
    };
  },
  methods: {
    choose(item, idx) {
      this.title = item;
      this.active = idx;
      Bus.$emit("setMsg", item);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
*{
  letter-spacing: 1px;
}
.top {
  margin-top: 40px;
  margin-bottom: 80px;
  height: 60px;
  .breadcrumb {
    position: relative;
    * {
      font-size: 16px;
    }
    height: 100%;
    background-image: url("~@/assets/images/about/icon.png");
    background-repeat: no-repeat;
    p {
      margin-top: 18px;
      text-indent: 5em;
      i {
        position: absolute;
        top: 37%;
        left: 55%;
        font-size: 0;
        line-height: 0;
        border-width: 7px;
        border-color: rgb(140,146,155);
        border-right-width: 0;
        border-style: dashed;
        border-left-style: solid;
        border-top-color: transparent;
        border-bottom-color: transparent;
        margin-right: 4px;
      }
    }
  }
}
.tab-title {
  text-align: right;
  span {
    box-sizing: border-box;
    display: inline-block;
    width: 100px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color:rgb(64,73,88);
    cursor: pointer;
  }
  .active {
    border-bottom: 6px solid rgb(218, 37, 20);
  }
}

.hover {
  color: rgb(29,80,158);
  &:hover {
    color: blue;
    cursor: pointer;
  }
}
</style>
