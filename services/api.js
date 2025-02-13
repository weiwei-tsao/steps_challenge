// const BASE_URL = 'https://your-api-domain.com/api';

// const request = async (url, options = {}) => {
//   const token = wx.getStorageSync('token');

//   const defaultOptions = {
//     url: `${BASE_URL}${url}`,
//     header: {
//       'Content-Type': 'application/json',
//       Authorization: token ? `Bearer ${token}` : '',
//     },
//   };

//   try {
//     const response = await new Promise((resolve, reject) => {
//       wx.request({
//         ...defaultOptions,
//         ...options,
//         success: resolve,
//         fail: reject,
//       });
//     });

//     if (response.statusCode >= 200 && response.statusCode < 300) {
//       return response.data;
//     } else {
//       throw new Error(response.data.message || '请求失败');
//     }
//   } catch (error) {
//     console.error('API请求失败:', error);
//     throw error;
//   }
// };

// const api = {
//   // 用户相关接口
//   user: {
//     login: (code) =>
//       request('/user/login', {
//         method: 'POST',
//         data: { code },
//       }),
//     updateProfile: (data) =>
//       request('/user/profile', {
//         method: 'PUT',
//         data,
//       }),
//   },

//   // 步数相关接口
//   steps: {
//     upload: (data) =>
//       request('/steps/upload', {
//         method: 'POST',
//         data,
//       }),
//     getDailyStats: () => request('/steps/daily'),
//     getWeeklyStats: () => request('/steps/weekly'),
//   },

//   // 排行榜相关接口
//   ranking: {
//     getFriends: () => request('/ranking/friends'),
//     getGlobal: () => request('/ranking/global'),
//   },
// };

// module.exports = api;
