var app = getApp()
var start_time;
var end_time;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    result:"拇指放在圆圈上\nReady? Go !"
  },

    push_start:function(event){
        start_time = new Date().getTime();
    },

    push_end:function(event){
        end_time = new Date().getTime();
        var diff_time_in_secode = (end_time - start_time) / 1000.0;
        var diff_time = Math.abs(diff_time_in_secode - 1);
        var diff_ratio = new Number(diff_time * 100).toFixed(2);

        var wording;
        if(0 <= diff_time && 0.05 > diff_time){
            wording = "牛批啊,小伙,你就是天才!";
        } else if (0.05 <= diff_time && 0.1 > diff_time) {
            wording = "时间感不错,接近本天才我了!";
        } else if (0.01 <= diff_time && 0.3 > diff_time ) {
            wording = "啧啧,水平还行吧,不过可以再精确些!";
        } else if (0.3 <= diff_time && 0.5 > diff_time) {
            wording = "嗯...有点小菜,继续努力哦!";
        } else if (0.5 <= diff_time && 1 > diff_time) {
            wording = "太菜了吧,居然差这么多!";
        } else {
            wording = "无语了,你是真滴菜!";
        }

        var diff_time_second = parseFloat(diff_time_in_secode);
        var wording_html = "你按出了" + diff_time_second + "秒,误差是" + diff_ratio + "%\n" + wording;

        this.setData(
          {
            result:wording_html
          }
        )

    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})