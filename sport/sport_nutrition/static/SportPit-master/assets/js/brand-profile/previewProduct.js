const fileInput = document.querySelector('input[type="file"]');
const fileInputButtonText = document.querySelector('#file-input__label');
const productPreviewImage = document.querySelector('.product-preview .item img');

fileInput.addEventListener('change', () => {
    const fileReader = new FileReader();
    fileInputButtonText.textContent = fileInput.files[0].name;
    fileReader.onload = function () {
        productPreviewImage.setAttribute('src', fileReader.result)
    }
    const file = fileInput.files[0];
    fileReader.readAsDataURL(file);
});
