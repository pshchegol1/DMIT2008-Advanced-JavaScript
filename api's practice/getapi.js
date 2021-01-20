    //Get API data
    function getApi()
    {
        fetch('https://api.github.com/users')
        .then(res =>{
           return res.json();
        })
        .then(data => {
            console.log(data);
            let li ='';
       
            data.forEach(users => {
                li += `<li>${users.login}</li>`
                li += `<img src="${users.avatar_url}" alt="">`
                
            });
            output.innerHTML = li;
           
            output.classList.remove('hidden');

        })
        .catch(err => {
            console.log(err);
        })
    }

    export {getApi}