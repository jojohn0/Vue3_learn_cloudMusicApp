import { createRouter, createWebHistory } from 'vue-router'
// 路由懒加载
const Home = () => import("@/views/home/Home.vue")
const Community = () => import("@/views/community/Community.vue")
const Profile = () => import("@/views/profile/Profile")
const Video = () => import("@/views/video/Video")


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
