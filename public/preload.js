// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { ipcRenderer, shell, clipboard } = require('electron');

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

init();
