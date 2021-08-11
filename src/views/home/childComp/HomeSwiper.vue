<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(image, index) in banners" :key="index">
      <img v-lazy="image.pic" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  height: 3.2rem;
  line-height: 3rem;
  text-align: center;
  img {
    height: 3.2rem;
  }
}
</style>