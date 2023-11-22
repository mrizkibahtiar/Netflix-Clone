const planClicks = document.querySelectorAll(".plan-click");
planClicks.forEach((item, i) => {
    item.addEventListener('click', function () {
        // proses menampilkan item yang diklik
        item.classList.add("bg-[#e50914]");
        item.classList.remove("bg-[#ef6b72]");
        item.querySelector('.triangle').classList.remove('invisible');

        // mengganti semua background yang tidak diklik
        planClicks.forEach((otherItemNotClicked, j) => {
            if (i !== j) {
                // triangle dan background
                otherItemNotClicked.classList.remove("bg-[#e50914]");
                otherItemNotClicked.classList.add("bg-[#ef6b72]");
                otherItemNotClicked.querySelector('.triangle').classList.add('invisible');
            }
        });

        // merubah text yang sesuai
        const plantTexts = document.querySelectorAll(`.plan-${i}`);
        plantTexts.forEach((itemWillChange) => {
            itemWillChange.classList.add('text-[#e50914]');
            itemWillChange.classList.remove('text-[#737373]');
        })

        // Mengembalikan warna teks pada elemen yang tidak sesuai
        const otherPlanTexts = document.querySelectorAll(`.plan:not(.plan-${i})`);
        otherPlanTexts.forEach((otherTextItem) => {
            otherTextItem.classList.remove("text-[#e50914]");
            otherTextItem.classList.add("text-[#737373]");
        });
    })
})

const price = document.querySelectorAll('#price');
const storageKey = 'PRICE_CHOOSED'

planClicks.forEach((click, index) => {
    click.addEventListener('click', function () {
        if (typeof (Storage) !== undefined) {
            if (localStorage !== null) {
                const priceData = JSON.parse(localStorage.getItem(storageKey));
                priceData.price = price[index].innerText;
                priceData.bundle = planClicks[index].innerText;

                localStorage.setItem(storageKey, JSON.stringify(priceData));
            }
        }
    })
})

window.addEventListener('load', function () {
    if (typeof (Storage) !== undefined) {
        let packet = {
            price: price[3].innerText,
            bundle: planClicks[3].innerText,
        };
        localStorage.setItem(storageKey, JSON.stringify(packet));
    } else {
        alert('Peramban anda tidak mendukung web storage')
    }
})