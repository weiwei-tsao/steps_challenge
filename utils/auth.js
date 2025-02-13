const wxService = require('../services/wx');

const auth = {
  // 检查微信运动权限
  async checkWeRunAuth() {
    try {
      const res = await wxService.getSetting();
      return !!res.authSetting['scope.werun'];
    } catch (error) {
      console.error('检查微信运动授权失败:', error);
      return false;
    }
  },

  // 获取用户信息权限
  async getUserProfile() {
    try {
      const { userInfo } = await wxService.getUserProfile();
      return userInfo;
    } catch (error) {
      console.error('获取用户信息失败:', error);
      return null;
    }
  },

  // 保存用户信息到本地
  setUserInfo(userInfo) {
    try {
      wx.setStorageSync('userInfo', userInfo);
      return true;
    } catch (error) {
      console.error('保存用户信息失败:', error);
      return false;
    }
  },

  // 获取本地存储的用户信息
  getUserInfo() {
    try {
      return wx.getStorageSync('userInfo');
    } catch (error) {
      console.error('获取本地用户信息失败:', error);
      return null;
    }
  },
};

module.exports = auth;
