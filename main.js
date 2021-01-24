const {
  app, // 控制应用生命周期的模块
  BrowserWindow, // 创建原生浏览器窗口的模块
  Tray,
  screen,
  ipcMain
} = require('electron');

const path = require('path');
const os = require('os');
const isDev = require('electron-is-dev');

// 保持一个对于 window 对象的全局引用，不然，当 JavaScript 被 GC，
// window 会被自动地关闭
let mainWindow = null;

const windowWidth = isDev ? 1400 : 400;
const windowHeight = 600;

function setWindowPosition() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  let windowX, windowY;

  windowX = (width - windowWidth) / 2;
  windowY = (height - windowHeight) / 2;

  // Set window position
  mainWindow.setPosition(windowX, windowY);
}

const url = require('url');

function createWindow() {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    show: false,
    frame: false,
    resizable: isDev,
    backgroundColor: "#403F4D",
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, 'preload.js'),
      devTools: true
    }
  })

  let tray = new Tray(path.join(__dirname, 'assets', 'icon.png'));

  tray.setToolTip("Click to access OneCopy");

  const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
  mainWindow.loadURL(startURL);
  // 加载应用的 index.html
  // mainWindow.loadFile(path.join(__dirname, 'public/index.html'))

  setWindowPosition();

  tray.on('click', () => {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  })

  mainWindow.once('ready-to-show', () => mainWindow.show());
}

const isSingleInstance = app.requestSingleInstanceLock()

if (!isSingleInstance) {
  app.quit();
}
else {
  app.on('second-instance', () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  })

  // 当所有窗口被关闭了，退出。
  app.on('window-all-closed', function () {
    // 在 OS X 上，通常用户在明确地按下 Cmd + Q 之前
    // 应用会保持活动状态
    if (process.platform !== 'darwin') app.quit();
  })

  // 当 Electron 完成了初始化并且准备创建浏览器窗口的时候
  // 这个方法就被调用
  app.on('ready', () => {
    // 调用创建浏览器窗口。
    createWindow();

    // Set App ID for notifications
    app.setAppUserModelId('com.hiroshifuu.onecopy-electron');

    // 打开开发工具
    if (isDev) mainWindow.openDevTools();

    // 当 window 被关闭，这个事件会被发出
    mainWindow.on('closed', function () {
      // 取消引用 window 对象，如果你的应用支持多窗口的话，
      // 通常会把多个 window 对象存放在一个数组里面，
      // 但这次不是。
      mainWindow = null;
    });
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null || BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })

  // Listen for 'open-main-window' event from renderer process
  ipcMain.on('open-main-window', () => {
    // Set always on top to true so that
    // mainwindow can be viewed on top of other apps
    mainWindow.setAlwaysOnTop(true);
    // Show the window now
    mainWindow.show();
    // Reset the always on top property
    mainWindow.setAlwaysOnTop(false);
  })

  ipcMain.on('minimize-app', () => {
    // Hide the main window
    mainWindow.hide();
  })

  ipcMain.on('quit-app', () => {
    // Quit the app and close all windows
    app.quit();
  })
}
