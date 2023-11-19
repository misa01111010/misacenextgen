document.getElementById('cuteButton').addEventListener('click', function() {
    changeBackgroundColor();
});

function changeBackgroundColor() {
    const colors = ['#ffcccb', '#ffb6c1', '#ff69b4', '#f08080', '#ffc0cb'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}