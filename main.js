const btnAwesome = document.querySelector("button1");
const btnAmazing = document.querySelector("button2");
const btnAttention = document.querySelector("button3");

const textEle = document.querySelector("squares");

function Menu(name,price){
    this.name = name;
    this.price = price;
}

const newDish = new Menu('Pizza',25);
const newDish2 = new Menu('Burger',12);
const newDish3 = new Menu('Nuggets',10);