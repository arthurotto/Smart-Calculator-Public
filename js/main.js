const electron = require('electron');
const path = require('path');
const url = require('url');

// SET ENV
process.env.NODE_ENV = 'development';

const {app, BrowserWindow, Menu, ipcMain} = electron;

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function(){
  // Create new window
const mainWindow = new BrowserWindow({
    width: 290,
    height: 680,
    maxWidth:300,
    maxHeight:1000,
    fullscreen:false,
    resizable:false,
    webPreferences: {
    }
  }) 
  // Load html in window
  mainWindow.loadFile('index.html');
  // Quit app when closed
  mainWindow.on('closed', function(){
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});
// Handle add item window

// Create menu template
const mainMenuTemplate =  [
  // Each object is a dropdown
  {
    
    label: 'Desenvolvido por Acrisio SS',
        click(){
            ;
             }
            }
]