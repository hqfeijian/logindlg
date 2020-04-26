// components/login/loginDlg.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMask:function() {
      this.setData({show: false})
    },

    cancelDlg: function () {
      this.setData({ show: false })
      this.triggerEvent('cancel')
    },

    loginDlg: function (e) {
      console.log("login", e)
      this.setData({ show: false })
      this.triggerEvent('login',e)
    }
  }
})
