import {BackendURL} from "./appProperties"

//function to Post to backend
export function qPost(apiPath, body) {
    return fetch(BackendURL + apiPath, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(body)
    }).then(response => {
            if (response.headers.get('content-length') === '0') {
                return null;
            }
            return response.json();
        }
    ).catch(error => {
        throw error
    })

}

//Function to get from backend
export function qGet(apiPath) {
    return fetch(BackendURL + apiPath, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }).then(response => {
            if (response.headers.get('content-length') === '0') {
                return null;
            }
            return response.json();
        }
    )
}