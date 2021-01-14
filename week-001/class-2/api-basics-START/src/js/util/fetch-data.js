/* 
    @method HTTP Request
    @param url url of the data

*/

function httpGetRequest (url)
{
    const request = fetch(url)
    .then(res => res.json())
    .then(result => result)

    return request
}

export {httpGetRequest}