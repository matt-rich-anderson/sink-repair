import { getRequests } from "./dataAccess.js"


export const Requests = () => {
    const requests = getRequests()
    
    const requestList = (request) => 
        `<li>A request for job: "${request.description}" was made for ${request.address} and is needed complete by${request.neededBy} for a budget of $${request.budget}.</li>`

    let html = `
        <ul>
            ${
                requests.map(requestList).join("")
            }
        </ul>
    `
    return html
}