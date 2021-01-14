

function markupContainer(wrapper, wrapperClass, elementArray)
{
    const container = document.createElement(wrapper)
    container.classList.add(wrapperClass)

    elementArray.array.forEach(element => {
        container.append(element)
    })
    return container
}

export default markupContainer