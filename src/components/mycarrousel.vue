<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, idx) in carrouselData" :key="idx">
        <img :src="item.cover" alt="" />
        <p style="color:rgb(128,128,128);text-align:center;letter-spacing:2px;">
          {{ item.title }}
        </p>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  props: {
    carrouselData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    init() {
      var mySwiper = new Swiper(".swiper-container", {
        // width: 1300, //你的slide宽度
        // slidesPerView: "auto",
        paginationClickable: true,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        spaceBetween: 20,
        slidesPerView: 4,
        grabCursor: true,
        autoplay: true,
        autoplayDisableOnInteraction: false,
        preventLinksPropagation: true,
        autoplay: 5000 //可选选项，自动滑动
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 300px;
  .swiper-wrapper {
    .swiper-slide {
      margin-right: 42px;
      width: 278px;
      height: 200px;
      img {
        width: 278px;
        height: 200px;
        min-height: 200px;
      }
    }
  }
}
</style>
