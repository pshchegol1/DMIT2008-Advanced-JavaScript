
//? Imports from JS files.
import {getText} from '/gettext.js';
import {getJson} from '/getjson.js';
import {getApi} from '/getapi.js';

window.addEventListener('load',function(e)
{
   
    //*Buttons Selectors
    const button1 = document.querySelector('#button1');
    const button2 = document.querySelector('#button2');
    const button3 = document.querySelector('#button3');

    const output = document.getElementById('output');

    console.log(button1,button2, button3,output);

    //*Event Listener
    button1.addEventListener('click', getText);
    button2.addEventListener('click', getJson);
    button3.addEventListener('click', getApi);


})//End of window Scope




