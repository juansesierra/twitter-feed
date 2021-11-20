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
    width: 1100,
    height: 750,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, "preload.js"),
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
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

ipcMain.handle('fetch-user-tweets', async (event, userId, paginationToken = "") => {
  try {
    const result = await client.getTweetsByUserId(userId, paginationToken);
    return result;
  }
  catch (error) {
    return error;
  }
})

ipcMain.handle('fetch-user', async (event, userName) => {
  try {
    const result = await client.getUserByUserName(userName);
    return result;
  }
  catch (error) {
    return error;
  }
})

ipcMain.handle('fetch-user-profile', async (event, userName) => {
  try {
    const result = await client.getUserProfileByUserName(userName);
    return result;
  }
  catch (error) {
    return error;
  }
})