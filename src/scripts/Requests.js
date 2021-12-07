import { getRequests } from "./dataAccess.js"

const requests = getRequests()

const requestListElement = (request)

export const Requests = () => {

    let html = `
        <ul>
            ${
                requests.map()
            }
        </ul>
    `
    return html
}