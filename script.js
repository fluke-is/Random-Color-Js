const Color = document.getElementById('color');
const ColorCode = document.getElementById('code');
const GenerateButton = document.getElementById('generate-button');

const GenerateColor = () => {
    const pattern = '0123456789abcdefg';
    let newColor = '#';

    for (let index = 0; index < 6; index++) {
        const random = Math.floor((Math.random() * 16));
        newColor += pattern[random];
    }
    Color.style.backgroundColor = newColor;
    ColorCode.innerHTML = newColor;
}

GenerateButton.addEventListener('click', GenerateColor);