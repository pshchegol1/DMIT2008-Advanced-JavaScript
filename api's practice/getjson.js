    //Get Json file data
    function getJson()
    {
        fetch('post.json')
        .then(res =>{
           return res.json();
        })
        .then(data => {
            console.log(data);
            let li ='';
       
            data.forEach(post => {
                li += `<li>${post.title}</li>`
                li += `<img src="${post.img}" alt="">`
                
            });
            output.innerHTML = li;
           
            output.classList.remove('hidden');

        })
        .catch(err => {
            console.log(err);
        })
    }

    export {getJson}