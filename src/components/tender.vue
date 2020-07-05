<template>
  <el-row class="cx_Tender" style="padding:0 24px;">
    <tab title="招标信息"  />
    <div style="margin-top:48px;">
      <carrousel :carrouselData="carrouselData"></carrousel>
    </div>
  </el-row>
</template>
<script>
import carrousel from '@/components/mycarrousel';
import tab from "@/components/tab";
export default {
    components:{
        tab,
        carrousel
    },
    data() {
        return{
            carrouselData:[
                {
                    url: require("@/assets/images/home/project/project1.jpg"),
                    title: "保利达.江湾南岸花园",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project2.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project3.jpg"),
                    title: "保利达.江湾南岸花园",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project1.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project2.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project3.jpg"),
                    title: "保利达.江湾南岸花园",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project1.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project2.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project3.jpg"),
                    title: "保利达.江湾南岸花园",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project1.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project2.jpg"),
                    title: "保利达.江湾南岸花园",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                },
                {
                    url: require("@/assets/images/home/project/project3.jpg"),
                    title: "佛山金地九龙壁",
                    time: "2020/06/27",
                    data:
                        " 是广东省建筑业协会会员单位、深圳市造价工程师协会理事单位、深圳市建设项目管理协会创会会员单位"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>

</style>
