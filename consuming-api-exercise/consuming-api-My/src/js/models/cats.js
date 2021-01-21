
let catStore =[];
let once;

//update once
function setCats(data)
{
    if(once === undefined)
    {
        catStore = [...data]
        once = true;
    }
    console.log(catStore)
}


function  updateCats(data)
{
  once === undefined;
  setCats(data)
}

function getCats()
{
    return catStore;
}

export {setCats, getCats, updateCats}



// *Objects
/* 
    Most data in javascript object
*/
//ES Module
/* const catModel =
{
    isDownload:true,
    storeCat:[],
    setData:(data)=>{
        this.storeCat = [...data]

    },
    getData:() => this.storeCat
}

export default catModel

//Application Code
const newThing = new catModel()
newThing.setData(data) */

//Arrow Functions dont have access to the keyword //? this