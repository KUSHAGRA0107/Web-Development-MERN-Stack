let imgBox = document.getElementById('img-box');
let qrImg = document.getElementById('qrImg');
let qrText = document.getElementById('qrText');
let button = document.querySelector('button');
button.addEventListener('click', generateQrCode);
function generateQrCode(){
    let qrValue = qrText.value.trim();
    qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrValue);  
}   