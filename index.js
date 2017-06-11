var {app, BrowserWindow, autoUpdater , ipcMain, dialog, shell, Menu  } = require('electron');
var electron = require('electron');
var os = require('os');

var platform = os.platform() + '_' + os.arch();
var win = null;

const shouldQuit = app.makeSingleInstance((commandLine, workingDirectory) => {
  // Someone tried to run a second instance, we should focus our window.
  if (win) {
    if (win.isMinimized()) {
      win.restore();
    }
    win.focus();
  }
})

if (shouldQuit) {
  app.quit();
  // add this return so you dont get the console log lines 
  //return; // this is the magic line
}

console.log('what next');

app.on('ready', function(){
  console.log('it is ready')
  electron.powerMonitor.on('suspend', () => {
    console.log('The system is going to sleep')
  })

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
