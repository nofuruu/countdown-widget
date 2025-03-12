const { app, BrowserWindow } = require('electron');

let mainWindow;

//app configuration
app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 300,
        frame: false, 
        alwaysOnTop: true, 
        transparent: true,
        resizeable: true,
        movable: true,
        skipTaskbar: true, 
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile('index.html');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
