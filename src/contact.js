function createContactSection() {
    const contactContainer = document.createElement('div')
    contactContainer.classList.add('contact')
    // contactContainer.classList.add('active')
    contactContainer.setAttribute('id', 'contact')

    contactContainer.appendChild(informationContainer())

    return contactContainer
}

function informationContainer() {
    const information = document.createElement('div')
    const mapImg = document.createElement('img')
    
    information.classList.add('information')
    
    mapImg.classList.add('map')
    mapImg.src = "img/location.jpg"
    mapImg.alt = "map image"

    information.appendChild(contactInfoCreator('fa-map-marker-alt', '36 st marks pl, new york, ny 10003, united states'))
    information.appendChild(contactInfoCreator('fa-calendar-alt', 'sun - mon: closed | tue - sat: 5 - 11pm'))
    information.appendChild(contactInfoCreator('fa-phone', '212-456-7899'))
    information.appendChild(mapImg)

    return information
}

function contactInfoCreator(iconClassPartTwo, info) {
    const contactInfoContainer = document.createElement('div')
    const icon = document.createElement('i')
    const details = document.createElement('p')

    contactInfoContainer.classList.add('contact-info')

    icon.classList.add('fas')
    icon.classList.add(`${iconClassPartTwo}`)

    details.textContent = info

    contactInfoContainer.appendChild(icon)
    contactInfoContainer.appendChild(details)

    return contactInfoContainer
}


export default createContactSection