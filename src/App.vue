<template>
  <div id="nav">
    <div class="left">
      <i class="iconfont icon-icon-"></i>
    </div>
    <div class="center">
      <router-link to="/profile">
        <span class="title">我的</span>
      </router-link>
      <router-link to="/home">
        <span class="title">发现</span>
      </router-link>
      <router-link to="/community">
        <span class="title">云村</span>
      </router-link>
      <router-link to="/video">
        <span class="title">视频</span>
      </router-link>
    </div>
    <div class="right">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
#nav {
  font-size: 0.32rem;
  width: 100%;
  display: flex;
  padding: 0.3rem 0.2rem;
  .center {
    flex: 1;
    display: flex;
    justify-content: space-around;
    .title {
      color: #000;
    }
  }
  .active {
    font-weight: 900;
  }
  .iconfont {
    font-size: 0.38rem;
  }
}
</style>
