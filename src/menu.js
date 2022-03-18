function createMenuSection() {
    const menuContainer = document.createElement('div')  
    menuContainer.classList.add('menu')
    menuContainer.classList.add('active')
    menuContainer.setAttribute('id', 'menu')

    menuContainer.appendChild(omakaseSectionCreator())

    return menuContainer
}

function omakaseSectionCreator() {
    const omakaseContainer = document.createElement('div')
    const omakaseTitle = document.createElement('p')
    const photoCredit = document.createElement('p')
    
    photoCredit.classList.add('photo-credit')
    photoCredit.textContent = 'credit: the omakase house'

    omakaseContainer.classList.add('omakase')
    
    omakaseTitle.classList.add('omakase-title')
    omakaseTitle.textContent = 'Omakase'


    omakaseContainer.appendChild(omakaseTitle)
    omakaseContainer.appendChild(nigiriContainer())
    omakaseContainer.appendChild(photoCredit)

    return omakaseContainer    
}


function nigiriContainer() {
    const nigiriSet = document.createElement('div')

    nigiriSet.classList.add('nigiri-set')

    nigiriSet.append(nigiriCardCreator('Engiwa Nigiri', 'soft white flat fish sashimi on a bed of sushi rice'))
    nigiriSet.append(nigiriCardCreator('Toro Cavier Nigiri', 'fatty toro topped with creamy cavier on a bed of sushi rice'))
    nigiriSet.append(nigiriCardCreator('Kinmedai Nigiri', 'slice of fresh crimson seabream on a bed of sushi rice'))
    nigiriSet.append(nigiriCardCreator('Chutoro Nigiri', 'slice of medium fatty tune on a bed of sushi rise'))
    nigiriSet.append(nigiriCardCreator('Madai Nigiri', 'delicious japanese madai snapper on a bed of sushi rice'))
    nigiriSet.append(nigiriCardCreator('Sayori Nigiri', 'succulent japanese halfbeak on a bed of sushi rice'))
    nigiriSet.append(nigiriCardCreator('Unagi Temaki', 'grilled japanese eel hand roll'))
    nigiriSet.append(nigiriCardCreator('Hamachi Nigiri', 'succulent yellowtail belly on a bed of sushi rice'))

    return nigiriSet
}


function nigiriCardCreator(name, description) {
    const nigiri = document.createElement('div')
    const nigiriImg = document.createElement('img')
    const descriptionContainer = document.createElement('div')
    const nigiriName = document.createElement('p')
    const nigiriDescription = document.createElement('p')

    nigiri.classList.add('nigiri')
    
    nigiriImg.src = `img/${name}.jpg`
    nigiriImg.alt = `${name}`

    descriptionContainer.classList.add('description')
    
    nigiriName.classList.add('nigiri-name')
    nigiriName.textContent = name

    nigiriDescription.classList.add('nigiri-description')
    nigiriDescription.textContent = description

    descriptionContainer.appendChild(nigiriName)
    descriptionContainer.appendChild(nigiriDescription)  

    nigiri.appendChild(nigiriImg)
    nigiri.appendChild(descriptionContainer)

    return nigiri
}


export default createMenuSection