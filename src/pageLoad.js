export default function content() {
    const sideBar = document.createElement('div');
    const content = document.createElement('div');

    sideBar.innerHTML = "test"
    content.innerHTML = "test"

    sideBar.classList.add('sidebar')
    content.classList.add('content') 

    console.log(sideBar, content)


    return document.body.appendChild(sideBar);
}

