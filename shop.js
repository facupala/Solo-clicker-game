//! DOM
const ZonaJuego=document.querySelector("#ZonaJuego");
const divshop=document.createElement("div");
 divshop.classList.add("box-shop")
 const divattack=document.createElement("div");
 divattack.classList.add("div-attack")
 const coin=document.createElement("h2");
 coin.innerHTML="Coin:"+jugardor1.puntaje;
 const textatack=document.createElement("p");
 textatack.innerHTML="ataque: +1"
 const BuyAttack=document.createElement("button");
 BuyAttack.innerHTML="Buy"
const divAutoPoint=document.createElement("div");
divAutoPoint.classList.add("div-AutoPoint")
const TextAutoPoint=document.createElement("p")
TextAutoPoint.innerHTML="autoclick: +1"
const BuyAutoPoint=document.createElement("button");
 BuyAutoPoint.innerHTML="Buy"




//! BOX DE COMPRAS
function carritoshop(){
 ZonaJuego.appendChild(divshop);
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
        coin.innerHTML="Coin:"+jugardor1.puntaje;
        box++;
    }else{
        removecarritoshop();
        box--;
    }
    

})


