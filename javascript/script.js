const colorDisplay = document.getElementById('colorDisplay');
const generateButton = document.getElementById('generateButton');
const customColorInput = document.getElementById('customColorInput');
const customColorButton = document.getElementById('customColorButton');

function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    colorDisplay.textContent = color;
}

generateButton.addEventListener('click', () => {
    const randomColor = generateRandomColor();
    setBackgroundColor(randomColor);
});

customColorButton.addEventListener('click', () => {
    const customColor = customColorInput.value;
    setBackgroundColor(customColor);
});

setBackgroundColor('#fff'); 