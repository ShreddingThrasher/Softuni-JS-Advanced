function solve() {
    let addProductButtons = Array.from(document.querySelectorAll('.add-product'));
    let products = [];
    let productPrices = [];

    let textArea = document.getElementsByTagName('textArea')[0];

    for (const button of addProductButtons) {
        button.addEventListener('click', addProductToCart)
    }

    let checkoutButton = document.querySelector('.checkout').addEventListener('click', checkout);

    function checkout(){
        let total = productPrices.reduce((a, b) => a + b, 0);
        textArea.value += `You bought ${products.join(', ')} for ${total.toFixed(2)}.`;

        disableAllButtons();
    }

    function disableAllButtons(){
        let buttons = Array.from(document.getElementsByTagName('button'));

        for (const button of buttons) {
            button.disabled = true;
        }
    }

    function addProductToCart(event){
        let textArea = document.getElementsByTagName('textArea')[0];

        let productName = event.target.parentNode.parentNode.querySelector('.product-title').textContent;
        let productPrice = Number(event.target.parentNode.parentNode.querySelector('.product-line-price').textContent);

        textArea.value += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;

        if(!products.includes(productName)){
            products.push(productName);
        }

        productPrices.push(productPrice);
    }
}