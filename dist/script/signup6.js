const price = document.querySelectorAll('#price');
const bundle = document.querySelector('#bundle');
const agreement = document.querySelector('#agreement');
const submit = document.querySelector('#submit');
const warning = document.querySelector('#warning');
const storageKey = 'PRICE_CHOOSED';


function getHarga() {
    return JSON.parse(localStorage.getItem(storageKey));
}


submit.addEventListener('click', function () {
    if (!agreement.checked) {
        warning.classList.remove('hidden');
    } else {
        warning.classList.add('hidden');
        // menampilkan modal
        const modalBoxContainer = document.querySelector('#modal-box-container');
        const modalBox = modalBoxContainer.querySelector('#modal-box');

        modalBoxContainer.classList.remove('hidden');
        modalBoxContainer.classList.add('flex');
        modalBox.classList.add('animate-pop');

        if (modalBoxContainer.classList.contains('flex')) {
            const ok = document.querySelector('#ok');
            ok.addEventListener('click', function () {
                location.href = 'index.html';
            })
        }
    }
})

window.addEventListener('load', function () {
    const priceData = getHarga();
    bundle.innerText = priceData.bundle;
    price.forEach(item => {
        item.innerText = priceData.price;
    })
})