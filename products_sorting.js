
let products = [ { prodId: 2, item: "Notepads (12 pack)", price: 12.29},
                 { prodId: 12, item: "Black Pens  (12 pack)", price: 5.70},
                 { prodId: 22, item: "Stapler", price: 12.79}
];

products.sort(
    function getProductsAscending(a, b){
        if(a.item < b.item) return 1;
        else if(a.item==b.item) return 0;
        else return -1;
    }
)
console.log(products);

let numOfProducts = products.length;

for(let i =0; i<numOfProducts; i++){
    console.log(`${products[i].item}----$${products[i].price}`);

}