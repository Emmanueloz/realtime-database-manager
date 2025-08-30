import { app, BrowserWindow } from "electron";
import { join } from "path";

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  console.log(app.isPackaged);

  if (!app.isPackaged) {
    // desarrollo: Vite dev server (por defecto 5173)
    mainWindow.loadURL("http://localhost:5173");
  } else {
    // producción: archivo empaquetado
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
