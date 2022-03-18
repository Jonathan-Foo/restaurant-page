function sidebar() {
    const sidebarDiv = document.createElement('div')
    const sideBarLogo = document.createElement('p')
    const sideBarLogoLine = document.createElement('span')
    
    sidebarDiv.classList.add('side-navbar')
    
    
    sideBarLogo.textContent = "kyoto sushi"
    sideBarLogo.classList.add('sidebar-logo')
    sideBarLogoLine.classList.add('sidebar-logo-line')

    sidebarDiv.appendChild(sideBarLogo)
    sidebarDiv.appendChild(sideBarLogoLine)
    sidebarDiv.appendChild(navListCreator())
    sidebarDiv.appendChild(copyrightCreator())

    return document.body.appendChild(sidebarDiv)
}


function navListCreator() {
    const list = document.createElement('ul')
    list.classList.add('nav-list')

    list.appendChild(createlistItems('home'))
    list.appendChild(createlistItems('menu'))
    list.appendChild(createlistItems('contact'))

    return list 
}

function createlistItems(name) {
    const div = document.createElement('div')
    const item = document.createElement('li')
    const span = document.createElement('span')
    
    div.classList.add('tab')
    div.classList.add(`${name}-tab`)
    
    item.dataset.targetSlide = `#${name}`
    item.textContent = `${name}`

    div.appendChild(item)
    div.appendChild(span)
    return div
}

function copyrightCreator() {
    const copyRightContainer = document.createElement('div')
    const copyRightText = document.createElement('p')
    const link = document.createElement('a')
    const icon = document.createElement('i')

    copyRightText.textContent = 'copyright © 2022 jonathan-foo'
    link.href = 'https://github.com/Jonathan-Foo'
    icon.classList.add('fab')
    icon.classList.add('fa-github')
    link.appendChild(icon)


    copyRightContainer.classList.add('copyright')
    copyRightContainer.appendChild(copyRightText)
    copyRightContainer.appendChild(link)

    return copyRightContainer
}

export default sidebar