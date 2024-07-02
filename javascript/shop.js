//! DOM
const ZonaJuego=document.querySelector("#ZonaJuego");
const divshop=document.createElement("div");
 divshop.classList.add("box-shop")
 const divattack=document.createElement("div");
 divattack.classList.add("div-attack")
 const coin=document.createElement("h2");
 coin.innerHTML="Coin:"+jugardor1.moneda.toFixed(2);
 const textatack=document.createElement("p");
 textatack.innerHTML="ataque: +1"
 const BuyAttack=document.createElement("button");
 BuyAttack.classList.add("Boton-Attack");
 BuyAttack.innerHTML="Buy"
const divAutoPoint=document.createElement("div");
divAutoPoint.classList.add("div-AutoPoint")
const TextAutoPoint=document.createElement("p")
TextAutoPoint.innerHTML="autoclick: +1"
const BuyAutoPoint=document.createElement("button");
 BuyAutoPoint.classList.add("Boton-AutoPoint");
 BuyAutoPoint.innerHTML="Buy"

 //! PRECIOS
 MonedaAttaque=1
//!BOX PRECIOS
const precioAttack=document.createElement("p");
precioAttack.innerHTML="<p>"+MonedaAttaque+"</p>";
BuyAttack.appendChild(precioAttack)

//! BOX DE COMPRAS
function carritoshop(){
 ZonaJuego.insertBefore(divshop,ZonaJuego.firstChild);
 divshop.appendChild(coin);
 divshop.appendChild(divattack);
 divattack.appendChild(textatack);
 divattack.appendChild(BuyAttack);
 divshop.appendChild(divAutoPoint);
 divAutoPoint.appendChild(TextAutoPoint);
 divAutoPoint.appendChild(BuyAutoPoint);

}
function removecarritoshop(){
    divshop.remove();
}
const botonshop=document.querySelector("#botonshop")

 let box=0;   
botonshop.addEventListener("click",()=>{
    if(box ===0){
        carritoshop();
        coin.innerHTML="Coin:"+jugardor1.moneda;
        box++;
    }else{
        removecarritoshop();
        box--;
    }
    

});
BuyAttack.addEventListener("click", ()=>{
   if(jugardor1.moneda >= MonedaAttaque){
    jugardor1.moneda-=MonedaAttaque;
    MonedaAttaque*=1.25;
    daño++;
    console.log(MonedaAttaque.toFixed(2))
    console.log(jugardor1.moneda)
    precioAttack.innerHTML="<p>"+MonedaAttaque.toFixed(2)+"</p>";
    coin.innerHTML="Coin:"+jugardor1.moneda.toFixed(2);
   }
});


