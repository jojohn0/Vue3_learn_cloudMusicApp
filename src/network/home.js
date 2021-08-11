import { request } from "./request"

// 获取banner图片
// 0 pc 1 android 2 iphone 3 ipad
export function getBanners(type = 1) {
  return request({
    url: `/banner?type=${type}`
  })
}