const { app, BrowserWindow } = require('electron');

let mainWindow;

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 300,
        height: 200,
        frame: false,
        alwaysOnTop: true,
        transparent:true,
        webPreferences:{
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin'){
            app.quit();
        }
    });
});