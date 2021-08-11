<template>
  <div class="container">
    <div class="left">
      <i class="iconfont icon-icon-"></i>
    </div>
    <div class="center">
      <router-link to="/profile">我的</router-link>
      <router-link to="/home">发现</router-link>
      <router-link to="/community">云村</router-link>
      <router-link to="/video">视频</router-link>
    </div>
    <div class="right">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style lang="less" scoped>
.container {
  width: 100%;
}
</style>