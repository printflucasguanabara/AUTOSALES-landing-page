const imageUrls = [
    'Images/Background-Img.jpg', // primeira img de fundo 
    'Images/Background-Img2.jpg', // segunda img de fundo 
    'Images/Background-Img3.jpg'// terceira img de fundo 
];

const textColors = [
    '#a9f1f6',     // Cor para a primeira imagem
    '#f8aa27', // Cor para a segunda imagem
    '#d8d8d8' // Cor para a terceira imagem
];

let currentIndex = 0;

function changeBackgroundAndTextColors() {
    const newImageUrl = imageUrls[currentIndex];
    const newTextColor = textColors[currentIndex];

    document.body.style.backgroundImage = `url('${newImageUrl}')`;

    // Selecionar todos os elementos de texto 
    const textElements = document.querySelectorAll('h1, h5, p, button, nav a');
    textElements.forEach(element => {
        element.style.color = newTextColor;
    });

    currentIndex = (currentIndex + 1) % imageUrls.length;
}

const changeImageButton = document.getElementById('changeImageButton');
changeImageButton.addEventListener('click', changeBackgroundAndTextColors);