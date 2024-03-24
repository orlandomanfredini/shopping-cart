console.log('ciao');

// creo un array di oggetti

const articoliNelCarrello = [
    {
        quantity : 1,
        product : {
            name : 'Burger',
            price : 8.5.toFixed(2),
            img : 'burger.png',
        }
    },
    {
        quantity : 1,
        product : {
            name : 'French fries',
            price : 5.5.toFixed(2),
            img : 'franch-fries.png',
        }
    },
    {
        quantity : 1,
        product : {
            name : 'Kebab',
            price : 7.0.toFixed(2),
            img : 'kebab.png',
        }
    },
    {
        quantity : 1,
        product : {
            name : 'Pizza',
            price : 10.0.toFixed(2),
            img : 'pizza.png',
        }
    },
]

const numeroArticoli = document.getElementById('number-of-item');
numeroArticoli.innerHTML += articoliNelCarrello.length +  ' Items';

const inputQuantity = document.getElementById('input-quantity');
console.log(inputQuantity);

inputQuantity.value = 1;










