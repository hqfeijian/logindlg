// components/login/loginDlg.js
import util from '../../utils/util.js';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    canIUseGetUserInfo:wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 组件的方法列表
   */
  methods: {
    returnMove:function(){
      return
    },
    clickMask:function() {
      this.setData({show: false})
      var that = this;
      console.log('clickMask');
      //此处调用时为了兼容1.9.9-2.2.2之间的版本，因为这之间的版本不会响应loginDlg事件，原因不明，但是会响应clickMask
      wx.getUserInfo({
        success(res){
          console.log('getUserInfo res=',res)
          if(res.userInfo){
            var loginInfo = {
              detail:res
            };
            that.loginDlg(loginInfo);
          }
        }
      })
    },

    cancelDlg: function () {
      console.log("cancelDlg")
      this.setData({ show: false })
      this.triggerEvent('cancel')
    },

    loginDlg: function (e) {
      console.log("loginDlg")
      this.setData({ show: false })
      this.triggerEvent('login',e)
    }
  }
})
