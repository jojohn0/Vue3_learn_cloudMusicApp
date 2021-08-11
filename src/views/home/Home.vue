<template>
  <div class="home">
    <home-swiper :banners="banners"></home-swiper>
  </div>
</template>

<script>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import TopNav from "@/components/content/TopNav.vue";
import HomeSwiper from "./childComp/HomeSwiper.vue";
import { getBanners } from "@/network/home.js";
export default {
  name: "Home",
  components: {
    TopNav,
    HomeSwiper,
  },
  setup() {
    let banners = ref([]);
    onMounted(() => {
      getBanners().then((res) => {
        console.log(res);
        banners.value = res.data.banners;
        console.log(banners.value);
      });
    });
    return {
      banners,
    };
  },
};
</script>

<style lang="less" scoped>
</style>
