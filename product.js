function cartdisplay(){
    var cartmainbox=document.querySelector('.addcart-main-box');
    cartmainbox.classList.add('addcart-main-box-active');
}
function cartcancel(){
    var cartmainbox=document.querySelector('.addcart-main-box');
    cartmainbox.classList.remove('addcart-main-box-active');
}
function removebtn(){
    var cartitemboxes=document.querySelector('.addcart-box');
    cartitemboxes.remove();

}
function addquantity(){
    var quantity=document.querySelector('.cart-input');
    var amount=document.querySelector('#amount');
    var originalPrice=document.querySelector('#original-price');
    var tot=document.getElementById('totalAmount');
    quantity.value=parseInt(quantity.value)+1;
    amount.innerText=parseInt( amount.innerText)+parseInt( originalPrice.innerText);
    tot.innerText=parseInt(tot.innerText)+parseInt( originalPrice.innerText);

    if(quantity.value>5)
    {
        alert("minimum product quantity is 5");
        quantity.value=5;
        amount.innerText=parseInt(originalPrice.innerText)*5;
        tot.innerText=parseInt(originalPrice.innerText)*5;
    }
    

}
function subquantity(){
    var quantity=document.querySelector('.cart-input');
    var quantity=document.querySelector('.cart-input');
    var amount=document.querySelector('#amount');
    var originalPrice=document.querySelector('#original-price');
    var tot=document.getElementById('totalAmount');
    quantity.value=parseInt(quantity.value)-1;
    amount.innerText=parseInt( amount.innerText)-parseInt( originalPrice.innerText);
    tot.innerText=parseInt(tot.innerText)-parseInt( originalPrice.innerText);
    if(quantity.value<1)
    {
        quantity.value=1;
        amount.innerText=parseInt(originalPrice.innerText);
        tot.innerText=parseInt(originalPrice.innerText)*1;

    }
    

}
function addcart(){
    
    let boat=this.parentElement;
    let title=boat.querySelector('.title').innerHTML;
    console.log(title);
}