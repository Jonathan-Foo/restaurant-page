import './style.css';

export default function content() {
    const div = document.createElement('div');
    const paragraph = document.createElement('p')
    const heading = document.createElement('h1');
    const content = document.getElementById('content');

    heading.textContent = "Al Fonzo's Pizzeria";
    heading.classList.add('heading')
    paragraph.textContent = "Customer Review 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sunt nemo quos animi impedit rem maxime ullam alias atque consequatur."
    
    div.appendChild(paragraph)

    content.appendChild(heading);
    content.appendChild(div);
    

    return content
}

