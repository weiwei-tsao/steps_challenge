const wxService = {
  // 获取微信步数数据
  async getWeRunData() {
    try {
      const { encryptedData, iv } = await wx.getWeRunData();
      // TODO: 这里需要解密数据，暂时返回模拟数据
      return {
        stepInfoList: [
          { timestamp: Date.now(), step: Math.floor(Math.random() * 15000) },
        ],
      };
    } catch (error) {
      console.error('获取微信步数失败:', error);
      return null;
    }
  },

  // 本地存储相关方法
  storage: {
    // 保存步数目标
    setStepTarget(target) {
      try {
        wx.setStorageSync('stepTarget', target);
        return true;
      } catch (error) {
        console.error('保存步数目标失败:', error);
        return false;
      }
    },

    // 获取步数目标
    getStepTarget() {
      try {
        return wx.getStorageSync('stepTarget') || 10000; // 默认10000步
      } catch (error) {
        console.error('获取步数目标失败:', error);
        return 10000;
      }
    },

    // 保存历史步数数据
    setStepHistory(data) {
      try {
        const history = wx.getStorageSync('stepHistory') || [];
        history.push(data);
        wx.setStorageSync('stepHistory', history);
        return true;
      } catch (error) {
        console.error('保存历史步数失败:', error);
        return false;
      }
    },

    // 获取历史步数数据
    getStepHistory() {
      try {
        return wx.getStorageSync('stepHistory') || [];
      } catch (error) {
        console.error('获取历史步数失败:', error);
        return [];
      }
    },
  },
};

module.exports = wxService;
