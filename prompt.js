const addToList = () => {
   const productField = document.getElementById('product-field')
   const quantityField = document.getElementById('quantity-field')
   const product = productField.value;
   const quantity = quantityField.value;
   showItems(product, quantity);
   productField.value = ''
   quantityField.value = '';
//    console.log(product, quantity);
}

const showItems = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`;
    const ul = document.getElementById('items-container');
    ul.appendChild(li);
}
// const getItemFromLocalStorage = () =>{
//     let cart = {};

// }
// const setItemToLocalStorage = (product, quantity) => {

// }