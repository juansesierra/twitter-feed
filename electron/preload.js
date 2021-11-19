const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
  'api',
  {
    fetchTweets: async (userId, paginationToken = "") => { return ipcRenderer.invoke('fetch-user-tweets', userId, paginationToken); },
    fetchUser: async (userName) => { return ipcRenderer.invoke('fetch-user', userName); },
    fetchUserProfile: async (userName) => { return ipcRenderer.invoke('fetch-user-profile', userName); }
  }
)