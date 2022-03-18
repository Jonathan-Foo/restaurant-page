import createHomeSection from "./home"

function createContentSection() {
    const contentDiv = document.createElement('div')
    contentDiv.classList.add('content')

    contentDiv.appendChild(createHomeSection())
    return document.body.appendChild(contentDiv)
}

export default createContentSection