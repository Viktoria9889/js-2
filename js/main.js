
const btnPlus = document.querySelector('.btn_a');
const btnMinus = document.querySelector('.btn_b');
const counter = document.querySelector('.value');
const pricePeach = document.querySelector('.price_peach');
const price = document.querySelector('.price');



btnPlus.addEventListener('click', () => {

    counter.innerHTML = ++counter.innerHTML;
    const totalPrice = parseInt(counter.innerHTML) * parseInt(pricePeach.innerHTML);

    price.innerHTML = totalPrice;
});

btnMinus.addEventListener('click', () => {

    if ( parseInt(counter.innerHTML) > 0) {
        counter.innerHTML -= 1;
        const totalPrice = parseInt(price.innerHTML) - 5;
        
        price.innerHTML = totalPrice;
    }
   
});