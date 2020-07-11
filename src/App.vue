<template>
  <div id="center">
    <header>
      <el-row>
        <div class="content p50 logo">
          <a href="https://www.gd-hongmao.com/index.html"
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
          :default-active="path"
          text-color="#fff"
          menu-trigger="click"
          router
          active-text-color="#fff"
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/about">关于我们</el-menu-item>
          <el-menu-item index="/tender">招标信息</el-menu-item>
          <el-menu-item index="/enterprise">企业荣誉</el-menu-item>
          <el-menu-item index="/policy">政策文件</el-menu-item>
          <el-menu-item index="/charging">收费标准</el-menu-item>
          <el-menu-item index="/talent">人才招聘</el-menu-item>
          <el-menu-item index="/contact">联系我们</el-menu-item>
          <span
            class="icon"
            @click="drawer=true"
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
      path:"/home",
      linkT: ["关于我们", "新闻中心", "招聘信息", "企业资质", "联系我们"],
      linkC: ["公司简介", "企业新闻", "招标公告", "荣誉证书", "联系方式"],
      linkB: ["业务范围", "行业新闻", "资料下载", "工程案例", "电子地图"],
      drawer: false,
      logo: require("@/assets/images/main/logo1.png"),
      search: require("@/assets/images/main/search.png"),
      keyword:require("@/assets/images/main/keywordjpg.jpg")
    };
  },
  created() {
    this.$router.push('/home')
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
    height: 120px;
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
          &:hover{
            color: brown;
            cursor: pointer;
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
    width: 385px;
    height: 51px;
    h1 {
      width: 383px;
      height: 51px;
    }
  }
}

nav {
  .el-menu {
    li{
      max-width: 160px;
    }
    .el-menu-item {
      min-width: 140px;
      padding: 0 35px;
    }
    .el-submenu__title {
      padding: 0 35px;
    }
    .is-active {
      border-bottom: none !important;
      background: rgb(23, 64, 127) !important;
      .el-submenu__title {
        border-bottom-color: rgb(23, 64, 127) !important;
        background: rgb(23, 64, 127) !important;
      }
    }
  }
}

.cx-submenu{
  /deep/.el-menu{
    min-width: 146px !important;
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
