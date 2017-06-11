var {app, BrowserWindow, autoUpdater , ipcMain, dialog, shell, Menu  } = require('electron');
var os = require('os');

var platform = os.platform() + '_' + os.arch();
var win = null;

app.on('ready', function(){
  console.log('rrrrr')

  // different settings depending on OS windows is different the mac
  win = new BrowserWindow({
    width:  100,
    height: 100,
    title: "test",
    frame: true,
    resizable: true,
    minWidth: 100,
    maxWidth: 100,
    minHeight: 545,
    maxHeight: 770,
    maximizable: false,
    minimizable: true,
    fullscreen: false,
    fullscreenable: false,
    transparent: false,
    'webPreferences': {
      'webSecurity': false
    }
  });
  win.setMenu(null);
  win.setAlwaysOnTop(true);

  win.loadURL('file://' + __dirname + '/foo.html');
});
