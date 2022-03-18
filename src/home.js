
export default function createHomeSection() {
    const homeContainer = document.createElement('div')
    const logo = document.createElement('p')
    const subText = document.createElement('p')
    const credit = document.createElement('p')

    homeContainer.classList.add('home')
    // homeContainer.classList.add('active')
    homeContainer.setAttribute('id', 'home')

    logo.classList.add('logo')
    logo.textContent = 'Kyoto Sushi'
    
    subText.classList.add('sub-text')
    subText.textContent = 'the true authentic omakase experience'
    
    credit.classList.add('credit')
    credit.textContent = 'photograph by Evan Sung'

    homeContainer.appendChild(logo)
    homeContainer.appendChild(subText)
    homeContainer.appendChild(credit)

    return homeContainer
}

