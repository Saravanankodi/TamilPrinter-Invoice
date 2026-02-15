import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  saveBill: (data: any) =>
    ipcRenderer.invoke("save-bill", data),
  getBills: () => 
    ipcRenderer.invoke("get-bills"),
  getBillDetails: (id: number) =>
      ipcRenderer.invoke("get-bill-details", id),

});
