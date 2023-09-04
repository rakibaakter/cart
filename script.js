const addToList = () => {
   const productField = document.getElementById('product-field')
   const quantityField = document.getElementById('quantity-field')
   const product = productField.value;
   const quantity = quantityField.value;
   productField.value = ''
   quantityField.value = '';
   showItems(product, quantity);
   setItemToLocalStorage(product, quantity)
}

const showItems = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} ${quantity}`;
    const ul = document.getElementById('items-container');
    ul.appendChild(li);
}
const getItemFromLocalStorage = () =>{
    let cart = {};
    const getCart = localStorage.getItem('cart');
    if(getCart){
        cart = JSON.parse(getCart);
    }
    return cart;
}
const setItemToLocalStorage = (product, quantity) => {
    const cart = getItemFromLocalStorage();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
    // console.log(cart)
}

const displayProductFromLocalStorage= () => {
    const storedCart  = getItemFromLocalStorage();
    console.log(storedCart)
    for(const product in storedCart){
        const quantity = storedCart[product];
        showItems(product, quantity);
    }
}

displayProductFromLocalStorage();