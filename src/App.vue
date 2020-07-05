<template>
  <div id="center">
    <header>
      <el-row>
        <div class="content p50 logo">
          <a href="https://www.baidu.com/s?wd=%E6%AF%94%E6%9D%A8%E9%93%B6%E5%86%B0%E5%82%BB%E7%9A%84%E4%BA%BA&rsv_spt=1&rsv_iqid=0xa7504468001a884a&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_dl=tb&oq=Drawer%25E8%2583%258C%25E6%2599%25AF&rsv_btype=t&inputT=17702&rsv_t=de20qkWZFZTCj5bS%2FWY4zbeqZX8z3Cx0fiLz5IRsNnjr%2F3gda8UgeQjFs%2FJIX9vdSWCG&rsv_pq=f1694f9f00077f02&sug=nth-child(n)%25E7%259A%2584%25E4%25BD%259C%25E7%2594%25A8%25E6%2598%25AF&rsv_sug3=637&rsv_sug1=324&rsv_sug7=100&rsv_sug2=0&rsv_sug4=18894"
            ><h1 :style="{ backgroundImage: 'url(' + logo + ')' }"></h1
          ></a>
        </div>
      </el-row>
    </header>
    <el-row>
      <nav>
        <el-menu
          class="content"
          mode="horizontal"
          background-color="#1d509f"
          :collapse-transition="true"
          text-color="#fff"
          menu-trigger="hover"
          active-text-color="#fff"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2" popper-class="cx-submenu">
            <template slot="title">关于我们</template>
            <el-menu-item index="2-1">公司简介</el-menu-item>
            <el-menu-item index="2-2">业务范围</el-menu-item>
          </el-submenu>
          <el-submenu index="3" popper-class="cx-submenu">
            <template slot="title">招标信息</template>
            <el-menu-item index="3-1">招标公告</el-menu-item>
            <el-menu-item index="3-2">资料下载</el-menu-item>
          </el-submenu>
          <el-submenu index="4" popper-class="cx-submenu">
            <template slot="title">企业荣誉</template>
            <el-menu-item index="4-1">荣誉证书</el-menu-item>
            <el-menu-item index="4-2">工程案例</el-menu-item>
          </el-submenu>
          <el-submenu index="5" popper-class="cx-submenu">
            <template slot="title">政策文件</template>
            <el-menu-item index="5-1">行政法规</el-menu-item>
            <el-menu-item index="5-2">建设法律</el-menu-item>
            <el-menu-item index="5-3">国务院文件</el-menu-item>
            <el-menu-item index="5-4">部门规章</el-menu-item>
            <el-menu-item index="5-5">地方法规</el-menu-item>
          </el-submenu>
          <el-submenu index="6" popper-class="cx-submenu">
            <template slot="title">收费标准</template>
            <el-menu-item index="6-1">收费标准</el-menu-item>
          </el-submenu>
          <el-submenu index="7" popper-class="cx-submenu">
            <template slot="title">人才招聘</template>
            <el-menu-item index="7-1">招聘信息</el-menu-item>
          </el-submenu>
          <el-submenu index="8" popper-class="cx-submenu">
            <template slot="title">联系我们</template>
            <el-menu-item index="8-1">联系方式</el-menu-item>
            <el-menu-item index="8-2">电子地图</el-menu-item>
          </el-submenu>
          <span
            class="icon"
            @click="drawer = true"
            :style="{ backgroundImage: 'url(' + search + ')' }"
          ></span>
        </el-menu>
      </nav>
    </el-row>
    <el-drawer :visible.sync="drawer" direction="ltr" :with-header="false" :style="`background:url(${keyword});`">
      <el-input></el-input>
    </el-drawer>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <el-row class="link">
        <div class="content">
          <div class="fl">
            <ul class="linkT">
              <li v-for="(item, idx) in linkT" :key="idx">{{ item }}</li>
            </ul>
            <ul class="linkC">
              <li v-for="(item, idx) in linkC" :key="idx">{{ item }}</li>
            </ul>
            <ul class="linkB">
              <li v-for="(item, idx) in linkB" :key="idx">{{ item }}</li>
            </ul>
          </div>
          <div class="fr qrCode">
            <img src="@/assets/images/main/qrCode.png" alt="" />
            <p>环保监管</p>
          </div>
        </div>
      </el-row>
      <el-row class="copyright">
        <div class="content">
          <ul>
            <li>联系方式：0755-83948356</li>
            <li>szcxzj@21cn.com</li>
            <li>传真:0755-83948355</li>
          </ul>
        </div>
      </el-row>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      linkT: ["关于我们", "新闻中心", "招聘信息", "企业资质", "联系我们"],
      linkC: ["公司简介", "企业新闻", "招标公告", "荣誉证书", "联系方式"],
      linkB: ["业务范围", "行业新闻", "资料下载", "工程案例", "电子地图"],
      drawer: false,
      logo: require("@/assets/images/main/logo.png"),
      search: require("@/assets/images/main/search.png"),
      keyword:require("@/assets/images/main/keywordjpg.jpg")
    };
  }
};
</script>

<style lang="scss">
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
* {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei";
}
ul li {
  list-style: none;
  text-align: center;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.content {
  width: 1200px;
  margin: auto;
}
#center {
  .content {
    width: 1200px;
    margin: auto;
  }
  .p50 {
    padding: 50px 0;
  }
  header {
    height: 170px;
    background: rgb(234, 238, 241);
  }
  nav {
    height: 60px;
    background: rgb(29, 80, 159);
    .icon {
      margin-top: 14px;
      margin-left: 20px;
      display: inline-block;
      width: 33px;
      height: 33px;
      cursor: pointer;
    }
  }
  footer {
    *{
      color: rgb(128, 128, 128);
    }
    .link {
      height: 300px;
      background: rgb(234, 238, 241);
      li {
        float: left;
      }
      .linkT {
        li {
          font-size: 20px;
          margin-right: 130px;
          margin-top: 60px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .linkC,
      .linkB {
        li {
          font-size: 16px;
          margin-top: 35px;
          margin-right: 147px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .qrCode {
        margin-top: 60px;
        text-align: center;
      }
    }
    .copyright {
      height: 100px;
      background: rgb(64, 73, 88);
      ul {
        li {
          float: left;
          font-size: 18px;
          color: #fff;
          margin-right: 216px;
          margin-top: 45px;
        }
      }
    }
  }
}

header {
  a {
    display: inline-block;
    width: 536px;
    height: 71px;
    h1 {
      width: 536px;
      height: 71px;
    }
  }
}

nav {
  .el-menu {
    li{
      max-width: 146px;
    }
    .el-menu-item {
      padding: 0 35px;
    }
    .el-submenu__title {
      padding: 0 35px;
    }
    .is-active {
      .el-submenu__title {
        border-bottom-color: rgb(23, 64, 127) !important;
        background: rgb(23, 64, 127) !important;
      }
    }
  }
}

.cx-submenu {
  .el-menu {
    background-color: rgb(74, 115, 177) !important;
    min-width: 150px;
    .el-menu-item {
      background-color: rgb(74, 115, 177) !important;
      &:hover {
        background-color: rgb(29, 80, 159) !important;
      }
    }
  }
}

.el-carousel {
  .el-carousel__indicator {
    .el-carousel__button {
      background: rgb(250, 153, 48);
      width: 24px;
      height: 8px;
      border-radius: 5px;
    }
  }
}

</style>
