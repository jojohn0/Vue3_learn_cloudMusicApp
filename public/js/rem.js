function remSize() {
  let deviceWidth = document.documentElement.clientWidth
  if (deviceWidth >= 750) {
    deviceWidth = 750;
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  // 设计稿是750px
  // 设置1半的宽度，那么就是375px
  // 1rem = 100px的设计稿宽度
  // 表达一半的宽度就是3.75rem
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + "px"
  document.querySelector("body").style.fontSize = 0.3 + "rem"
}

remSize()

window.onresize = () => {
  remSize()
}