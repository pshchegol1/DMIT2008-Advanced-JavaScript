window.addEventListener('load',function(e)
{
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');

    const output = document.getElementById('output');

      console.log(button1,button2, button3,output);



    
    button1.addEventListener('click', getText);

    function getText()
    {
        fetch('steam.txt')
        .then(function(res){
           return res.text();
        })
        .then(function(data){
            console.log(data);
            output.innerHTML = data;
            output.classList.remove('hidden');
        })
    }










})




