const inputFile = document.querySelector('#img-input');
const inputFileLable = document.querySelector('#img-input + label');
inputFile.addEventListener('change', () => {
    inputFileLable.innerHTML = inputFile.files[0].name;
})