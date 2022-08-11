function createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('span');


    var size = Math.random() * 20;

    square.style.width = 72 + 'px';
    square.style.height = 72 + 'px';

    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000)
}
setInterval(createSquare, 150)