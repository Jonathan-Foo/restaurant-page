import createHomeSection from "./home"
import createMenuSection from "./menu"
import createContactSection from "./contact"

function createContentSection() {
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('content')

    contentDiv.appendChild(createHomeSection())
    contentDiv.appendChild(createMenuSection())
    contentDiv.appendChild(createContactSection())
    
    return document.body.appendChild(contentDiv)
}

export default createContentSection