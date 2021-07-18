
const { app, BrowserWindow } = require('electron');

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
  // create browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  const startURL = process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    });

  // load index.html
  mainWindow.loadURL(startURL);

  // open devtools
  // mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    // dereference the window object
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // if not on mac, quit app when windows all closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainwindow === null) {
    createWindow();
  }
});