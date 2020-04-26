//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    showLoginDlg:false,
    userInfo: {},
    hasUserInfo: false
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showLogin:function(){
    this.setData({
      showLoginDlg:true
    })
  },
  loginCancel:function(){
    console.log("loginCancel")
  },
  loginConfirm: function (e) {
    console.log("loginConfirm", e.detail)
    var userInfo = e.detail.detail.userInfo;
    //登录
    if (userInfo){
      this.setData({
        hasUserInfo:true,
        userInfo: userInfo
      })
      wx.showToast({
        icon: 'none',
        title: '登录成功',
      })
    }else{
      wx.showToast({
        icon:'none',
        title: '登录失败',
      })
    }

  }
})
