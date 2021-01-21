import ejs from 'ejs';
import catView from '../views/cat-view.js';
import {getCats} from '../models/cats.js';

function getRandomCatImages()
{

    const data = getCats();
    
    const templates = data.map(item =>{

    // EJS
    const template = ejs.render(catView, {data:item})
    console.log(template)

/*      const template = `
    
        <aside class = "cat-display" >
            <img src="${item.url}" alt="random"/>
        </aside>
        `
        const elem =  document.createRange().createContextualFragment(template).children[0]
        return elem */

        const elem =  document.createRange().createContextualFragment(template).children[0]
        return elem 
    })
    
    return templates
}

export {getRandomCatImages}