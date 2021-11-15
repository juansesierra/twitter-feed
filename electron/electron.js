const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');
const { ipcMain } = require('electron')
const TwitterApiClient = require("./twitterApiClient");
const client = new TwitterApiClient("AAAAAAAAAAAAAAAAAAAAAKqcVgEAAAAADInlpSqA%2FTm3L8CXkz%2BeTqLz7yo%3D0r1kECHkNb48mnAAWwP0VSDtmrHqlNgK0S6WCXDp2Mmdev6yRn");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900, 
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('fetch-user-tweets', async (event, userId) => {
    //execute tasks on behalf of renderer process 
    await client.getTweetsByUserId("590311714");
})

ipcMain.on('fetch-user', async (event, userName) => {
  //execute tasks on behalf of renderer process 
  await client.getUserByUserName(userName);
})

ipcMain.on('fetch-user-profile', async (event, userName) => {
  //execute tasks on behalf of renderer process 
  await client.getUserProfileByUserName(userName);
})