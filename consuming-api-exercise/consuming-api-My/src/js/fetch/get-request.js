

 /* Function getImageRequest */
function getImagesRequest(url)
{
    /* //*api key for header: */
    const aheader = new Headers()
    aheader.append('x-api-key', '69f5edec-7047-4b96-ba25-3e1d490877ac')
    
    const requestObject = {
    method: 'GET',
    headers: aheader,
    redirect: 'follow'
    };

  const result =   fetch(url, requestObject)
    .then(res => res.json())
    .then(data => data)

    return result;
}

function getBreedsRequest()
{
    return "getBreedsRequest";
}

export  {getImagesRequest, getBreedsRequest};

