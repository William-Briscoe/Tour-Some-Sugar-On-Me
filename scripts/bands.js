import { getBands } from "./database.js";

const bands = getBands()

export const createBandsHtml = () =>{
    let bandsHTML = "<h3>The Bands</h3><ul>"

    for (const band of bands) {
        bandsHTML += `<li data-type="band" data-id="${band.id}">${band.name}</li>`
    }
    bandsHTML += "</ul>"

    return bandsHTML
}