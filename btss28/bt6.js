const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];
function sum(sum){
    sum = cart[0].price *cart[0].quantity +cart[1].price *cart[1].quantity+cart[2].price *cart[2].quantity;
    console.log(sum);
}
sum();