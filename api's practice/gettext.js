    //Get Text file data
    function getText()
    {
        fetch('steam.txt')
        .then(res =>{
           return res.text();
        })
        .then(data => {
            console.log(data);
            output.innerHTML = data;
            output.classList.remove('hidden');
        })
        .catch(err => {
            console.log(err);
        })
    }

    export {getText}