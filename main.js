const btnAwesome = document.querySelector(".button1");
const btnAmazing = document.querySelector(".button2");
const btnAttention = document.querySelector(".button3");

const textEle = document.querySelector(".squares");

function Menu(name,price){
    this.name = name;
    this.price = price;
}
Menu.prototype.dishes = function () {
textEle.innerText = `This special is ${this.name} with price ${this.price}`;
}

const newDish1 = new Menu('Pizza',25);
const newDish2 = new Menu('Burger',12);
const newDish3 = new Menu('Nuggets',10);



btnAmazing.addEventListener("click", function (){
    newDish1.dishes();
})
btnAwesome.addEventListener("click", function(){
    newDish2.dishes();
});
btnAttention.addEventListener("click", function () {
    newDish3.dishes();
});




const user = {
    name: 'Mariusz',
    age: 19,
    'fav-color': 'black',
    car : {
        brand: 'Audi'
    }
}