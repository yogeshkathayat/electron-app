const {app, BrowserWindow}=require('electron');

const createWindow=()=>{
    //create browser window
win=new BrowserWindow({width:800,height:600});

//load the index.html of the app in the window
win.loadFile('index.html')
}

app.on('ready',createWindow);