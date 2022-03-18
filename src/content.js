import createHomeSection from "./home"
import createMenuSection from "./menu"

function createContentSection() {
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('content')

    contentDiv.appendChild(createHomeSection())
    contentDiv.appendChild(createMenuSection())
    return document.body.appendChild(contentDiv)
}

export default createContentSection