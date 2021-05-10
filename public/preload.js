// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer, shell, clipboard } = require('electron');

const init = () => {
  window.copyToClipboard = (text) => {
    clipboard.writeText(text);
  };

  window.openExternalUrl = (url) => {
    shell.openExternal(url);
  };

  window.clearClipboard = () => {
    clipboard.clear();
  };

  window.openMainWindow = () => {
    ipcRenderer.send('open-main-window');
  };

  window.minimizeApp = () => {
    ipcRenderer.send('minimize-app');
  };

  window.quitApp = () => {
    ipcRenderer.send('quit-app');
  };
};

contextBridge.exposeInMainWorld(
  'api',
  {
    copyToClipboard: (text) => clipboard.writeText(text),
    openExternalUrl: (url) => shell.openExternal(url),
    clearClipboard: () => clipboard.clear(),
    openMainWindow: () => ipcRenderer.send('open-main-window'),
    minimizeApp: () => ipcRenderer.send('minimize-app'),
    quitApp: () => ipcRenderer.send('quit-app')
  }
)

init();