const electron = require('electron');
const {app, BrowserWindow, Menu, ipcMain, shell} = electron;

// SET ENV
process.env.NODE_ENV = 'development';

let mainWindow;

// Create menu template
const template = [
  {
    role: 'Meu Menu',
    submenu: [
      {
        label: 'Salvar',
        click: () => {
          mainWindow.webContents.send('asynchronous-message', {'SAVED': 'File Saved'});
        }
      },
      {
        label: 'Toggle',
        click: () => {
          mainWindow.webContents.send('asynchronous-message', {'Toggle': 'File Toggle'});
        }
      }
    ]
  }
]

// Build menu from template
const mainMenu = Menu.buildFromTemplate(template);

// Insert menu
Menu.setApplicationMenu(mainMenu);

// Listen for app to be ready
app.on('ready', function() {
  // Create new window
  mainWindow = new BrowserWindow({
    width: 290,
    height: 680,
    maxWidth:300,
    maxHeight:1000,
    fullscreen:false,
    resizable:false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    }
  })

  // Load html in window
  mainWindow.loadFile('index.html');
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  mainWindow.webContents.toggleDevTools()
});
