window.addEventListener('load',function(e)
{
    //Buttons Selectors
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');

    const output = document.getElementById('output');

      console.log(button1,button2, button3,output);



    //Event Listener
    button1.addEventListener('click', getText);
    button2.addEventListener('click', getJson);
    button3.addEventListener('click', getApi);

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
                
            });
            output.innerHTML = li;
           
            output.classList.remove('hidden');

        })
        .catch(err => {
            console.log(err);
        })
    }

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
                
            });
            output.innerHTML = li;
           
            output.classList.remove('hidden');

        })
        .catch(err => {
            console.log(err);
        })
    }










})//End of window Scope




