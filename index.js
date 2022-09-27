const { app, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();
function CreateWindow(url) {
  const Window = new BrowserWindow({
    fullscreen: true,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  require("@electron/remote/main").enable(Window.webContents)
  Window.loadURL(url);
  return Window;
}

let MainWindow;
app.whenReady().then((r) => {
  MainWindow = CreateWindow("http://tpv.localhost");
});
