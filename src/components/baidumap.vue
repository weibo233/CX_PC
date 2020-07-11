<template>
  <div class="bm-view">
    <baidu-map
      class="bm-view"
      :center="center"
      :zoom="zoom"
      @ready="handler"
      @click="getClickInfo"
      ak="r8kPn7pGj2Rp7ruAECrDfWBMKuFxYKSB"
    >
    </baidu-map>
  </div>
</template>

<script>
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  components: {
    BaiduMap
  },
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 3
    };
  },
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 114.051388;
      this.center.lat = 22.562292;
      this.zoom = 15;
      var point = new BMap.Point(114.051388, 22.562292);
      map.centerAndZoom(point, 13);
      var marker = new BMap.Marker(point); // 创建标注
      map.addOverlay(marker); // 将标注添加到地图中
      var circle = new BMap.Circle(point, 6, {
        strokeColor: "Red",
        strokeWeight: 6,
        strokeOpacity: 1,
        Color: "Red",
        fillColor: "#f03"
      });
      map.addOverlay(circle);
      map.enableScrollWheelZoom(true); //鼠标缩放
      var content = "<table>";
      content = content + "<tr><td> 深圳市成效项目管理有限公司</td></tr>";
      content = content + "<tr><td> 联系电话：0755-83948356</td></tr>";
      content =
        content +
        "<tr><td> 地址：深圳市福田区莲花街道景田南住宅小区综合楼南侧二楼201</td></tr>";
      content += "</table>";
      var infowindow = new BMap.InfoWindow(content);
      marker.addEventListener("click", function() {
        this.openInfoWindow(infowindow);
      });
    },
    getClickInfo(e) {
      console.log(e.point.lng);
      console.log(e.point.lat);
      //   this.center.lng = e.point.lng
      //   this.center.lat = e.point.lat
    }
  }
};
</script>

<style>
.bm-view {
  width: 100%;
  height: 600px;
  margin-bottom: 300px;
}
</style>
