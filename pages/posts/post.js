// pages/posts/post.js
Page({
  data: {

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var processData = {
      date: "2016-9-7",
      post:{
        title:"hello",
        abstract:"this is zhaiyao"
      }
    }
    this.setData(processData);
  },
  onReady: function () {
    // 页面渲染完成
    console.log("onReady");
  },
  onShow: function () {
    // 页面显示
    console.log("onShow");
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})