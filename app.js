App({
  onLaunch() {
    // 检查微信运动权限
    this.checkWeRunAuth();
    // 初始化步数目标
    const wxService = require('./services/wx');
    this.globalData.stepTarget = wxService.storage.getStepTarget();
  },

  globalData: {
    userInfo: null,
    hasWeRunAuth: false,
    stepTarget: 10000, // 默认目标步数
  },

  async checkWeRunAuth() {
    try {
      const res = await wx.getSetting();
      this.globalData.hasWeRunAuth = !!res.authSetting['scope.werun'];
      if (!this.globalData.hasWeRunAuth) {
        // 尝试获取授权
        await wx.authorize({ scope: 'scope.werun' });
        this.globalData.hasWeRunAuth = true;
      }
    } catch (error) {
      console.error('检查微信运动授权失败:', error);
    }
  },
});
