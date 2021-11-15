const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld(
  'api',
  {
    fetchTweets: (userId) => { ipcRenderer.send('fetch-user-tweets', userId); },
    fetchUser: (userName) => { ipcRenderer.send('fetch-user', userName); },
    fetchUserProfile: (userName) => { ipcRenderer.send('fetch-user-profile', userName); }    
  }
)