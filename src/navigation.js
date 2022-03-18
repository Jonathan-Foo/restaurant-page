function navigationFunction() {
    const tabs = [...document.querySelectorAll('.tab')]
    
    tabs.forEach(tab => tab.addEventListener('click', (e) => {
        changeSlide(e)
        activeTab(e)
    }))

}

function activeTab(e) {
    const tabs = [...document.querySelectorAll('.tab')]
    const spans = tabs.map(tab => tab.lastElementChild)
    spans.forEach(span => span.classList.remove('active'))
    e.target.nextElementSibling.classList.toggle('active')
} 

function changeSlide(e) {
    const targetSlide = document.querySelector(e.target.dataset.targetSlide)
    const slides = [...document.querySelectorAll('.content > div')]
    slides.forEach(slide => slide.classList.remove('active'))
    targetSlide.classList.toggle('active')
}

export default navigationFunction