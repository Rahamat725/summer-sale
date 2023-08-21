let total=0;
function cartItemsCalculate(target){
const listItem = target.childNodes[9].innerText;
const li = document.createElement('li');
li.setAttribute("class",'list-decimal')
li.innerText=listItem;
document.getElementById('item-name-list').appendChild(li);

const price = target.childNodes[11].innerText.split(" ")[0];
total = parseFloat(total) + parseFloat(price);
if(total>0){
    document.getElementById('item-total-price').innerText=total;
    const makePurchase = document.getElementById('make-purchase');
    makePurchase.disabled=false;
    makePurchase.style.backgroundColor='#e527b2'
}

if(total>=200){
    // document.getElementById('btn-apply').disabled=false;
  const btnApply =  document.getElementById('btn-apply')
   btnApply.disabled=false;
   btnApply.style.backgroundColor='#e527b2'
}


}

document.getElementById('btn-apply').addEventListener('click',function(){
    const cuponCode = document.getElementById('cupon-code').value;
    if(cuponCode==='SELL200'){
       const discountPrice = total*0.2;
      const  discount = discountPrice.toFixed(2);
       const totalPrice = total-discount;
       document.getElementById('discount-price').innerText=discount;
       document.getElementById('grand-total-price').innerText=totalPrice;
    }else{
        alert('Please Input Valid Cupon')
    }
    document.getElementById('cupon-code').value='';
})


// Go To Home Button
document.getElementById('btn-home').addEventListener('click',function(){
    
    document.getElementById('item-total-price').innerText='0.00';
    document.getElementById('discount-price').innerText='0.00';
    document.getElementById('grand-total-price').innerText='0.00';
    window.location.href="index.html"
})

// bg-[#e527b2]