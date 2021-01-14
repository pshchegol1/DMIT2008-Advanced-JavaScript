
function createElementFromTemplate(template =[])
{
    let elements;

    if(template.length === 0)
    {
        throw new Error("You must add array of template literals as valid markup")
    }
    
    elements = template.map((templateLiteral, index)=>{
        const element  = document.createRange().createContextualFragment(templateLiteral)
        console.log(element)
        return element
    })
    return elements
}

export default createElementFromTemplate