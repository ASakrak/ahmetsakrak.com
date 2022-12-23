function createSquare() {
    const section = document.querySelector('section');
    const square = document.createElement('span');


    var size = Math.random() * 10;

    square.style.width = 70 + 'px';
    square.style.height = 70 + 'px';
    //55/55
    square.style.top = Math.random() * innerHeight + 'px';
    square.style.left = Math.random() * innerWidth + 'px';

    section.appendChild(square);

    setTimeout(() => {
        square.remove()
    }, 5000)
}
setInterval(createSquare, 100)