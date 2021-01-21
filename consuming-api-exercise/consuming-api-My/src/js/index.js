
import {getImagesRequest} from './fetch/get-request.js';
import {getRandomCatImages} from './controllers/cat-controller.js';
import {setCats,getCats} from './models/cats.js';

window.addEventListener('load',function(e)
{
   const request =  getImagesRequest("https://api.thecatapi.com/v1/images/search?limit=10")

   request.then(data =>{
     setCats(data)
     console.log(getCats())
     //const cats = getRandomCatImages();
     

//* Display module
/*   const catDisplay = document.querySelector('.cat-display');
     cats.forEach(item =>{
        catDisplay.append(item);
     }) */


   })


})