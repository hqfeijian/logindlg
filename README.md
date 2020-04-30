# 微信小程序登录组件
由于很多页面需要用到登录弹框，因此特别写了一个组件，用于多处调用登录组件。

效果如下：

![组件使用演示](https://github.com/hqfeijian/logindlg/blob/master/logindlg.gif)

使用方法：
在wxml界面中填写

````
<!-- 授权弹窗  -->
<loginDlg show="{{showWechatAuthorize}}" bindcancel="loginCancel" bindlogin='loginConfirm'>
</loginDlg>
````
js文件接收事件
````
Page({
...
loginCancel: function() {
    this.setData({
      showWechatAuthorize: false
    });
  },
  loginConfirm: function(e) {
    console.log('userinfo=', e.detail)
    if (e.detail.detail) {
      app.bindGetUserInfo(e.detail);
      // 授权回调
      app.userInfoReadyCallback = res => {
        console.log("userInfoReadyCallback res=", res);
        this.setData({
          userInfo: app.globalData.userInfo,
        });
        wx.showToast({
          icon: 'none',
          title: '登录成功',
        })
      }
    } else {
      wx.showToast({
        icon: 'none',
        title: '登录失败',
      })
    }
  }
````
