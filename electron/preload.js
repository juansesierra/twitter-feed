const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
  'api',
  {
    fetchTweets: async (userId) => { return ipcRenderer.invoke('fetch-user-tweets', userId); },
    fetchUser: async (userName) => { return ipcRenderer.invoke('fetch-user', userName); },
    fetchUserProfile: async  (userName) => { return ipcRenderer.invoke('fetch-user-profile', userName);}    
  }
)