// pages/personal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  changeToChooseAddress(){
    wx.navigateTo({
      url:'../chooseAddress/chooseAddress'
    })
  },
  changeToAfterSale(){
    wx.navigateTo({
      url:'../afterSaleDetail/afterSaleDetail'
    })
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
  
  },
  focusFun() {
    console.log('获取焦点操作！');
},
inputFun(value) {
    console.log(value);
    console.log('您正在输入...');
},
blurFun(value) {
    console.log(value);
    console.log('您已失去焦点！');
},
submitFun(value) {
    console.log(value);
    console.log('默认提交操作！');
}
})