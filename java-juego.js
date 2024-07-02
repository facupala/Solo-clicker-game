
//! (Descargue la extension llamada better comments)
//! la puntuacion inicializa en 0
PlayerPoint=document.querySelector("#Puntuacion");
PlayerPoint.innerHTML="<Strong>"+0+"</Strong>";

//! CREAMOS UN CONSTRUCTOR PARA LOS JUGADORES
class players{
    constructor(nombre,puntaje,daño,moneda){
        this.nombre=nombre ;
    this.puntaje=puntaje;
    this.daño=daño;
    this.moneda=moneda;
    }
}
//!CREAMOS UN ARRAY PARA LOS JUGADORES Y SONIDO
const EffectAtack=[
    "./musica/espada1.mp3",
    "./musica/espada2.mp3",
    "./musica/espada3.mp3",
    "./musica/espada4.mp3"
]

const jugadores=[
    {nombre:"Guillermo", puntaje:25,},
    {nombre:"rocio2",    puntaje:13000,},
    {nombre:"Facundo",   puntaje:5,},
    {nombre:"carlos",    puntaje:1000,},
    {nombre:"ditto",     puntaje:30.},
 ];
//!  INTEREACTUAMOS CON EL USUARIO Y SUMAMOS SUS DATO AL ARRAY
 
 let nombre=localStorage.getItem("playerName");
 let daño=1;
 let moneda =  0;
 let puntaje=0;
 let y =0

//! SUMAMOS LA INFO DEL JUGADOR AL ARRAY
let jugardor1= new players(nombre,puntaje,daño,moneda);
jugadores.push(jugardor1);
NickNam=document.querySelector("#NickName");
NickNam.innerHTML= "<Strong>JUGADOR:"+" "+jugardor1.nombre+"</Strong>";
//!RESETEO DE PUNTAJE
const ReiniciarPoint =document.querySelector("#ResetPuntaje");
ReiniciarPoint.addEventListener("click",() =>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
      });
      swalWithBootstrapButtons.fire({
        title: "Desea Reiniciar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si!",
        cancelButtonText: "No!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            ResetearPuntaje();
            ActualizarTop();
          swalWithBootstrapButtons.fire({
            title: "Reiniciando",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            icon: "error"
          });
        }
      });
    
    
   
    
})


//! Monster
const monster=document.createElement("img");
monster.id="PointButton";
monster.classList.add("StarButton");
const Monstervida=document.createElement("p");
Monstervida.classList.add("monster-vida");
let vida=1;
let mon=0;
let mun=0;
//! metodo fetch prueba
function creacionmonster(){
fetch("./monster.json")
.then(response => response.json())
.then(data => {
  
  console.log(data)
  
  monster.src=data[mon].url
  monster.width=300;
  ZonaJuego.appendChild(monster)
  ZonaJuego.appendChild(Monstervida)
 vida=data[mon].vida
 Monstervida.innerHTML=vida
})
}
// creacionmonster();
//!
function Cambiomonster(){
  if(mun===0){
    creacionmonster();
    mun++;
  }
  if(vida <= 0){
    mon++;
    creacionmonster();
  }
}
Cambiomonster();
//! EVENTO CLICK PUNTO 
const clicker=document.querySelector("#PointButton");
monster.addEventListener("click",() => {
    jugardor1.moneda++;
    SumarPuntos();
    ActualizarTop();
    playRandomEffect();
    Efectosslash();
    coin.innerHTML="Coin:"+jugardor1.moneda.toFixed(2);
    console.log(jugardor1);
    vida-=daño;
    Monstervida.innerHTML=vida
    Cambiomonster();
    
});


//!se crea la lista inicial antes de empezar hacer click (cuando hacemos click esta lista se borra y la remplaza la de la function)
jugadores.sort((a,b) => b.puntaje - a.puntaje);
for(i=0,o=1;i < jugadores.length; i++ , o++){
    console.log("TOP:"+o+" "+jugadores[i].puntaje);
    TopLista=document.querySelector("#TOPLista");
    TopLista.innerHTML +="<li>"+o+": "+jugadores[i].nombre+" "+jugadores[i].puntaje+"</li>";
    
};


//!DARK MODE CON LOCAL STORAGE
const BotonDark=document.querySelector("#Boton-Modo-Dark");
const BarraJuego=document.querySelectorAll(".Barra");
let DarkMode=localStorage.getItem("dark-Mode");
const body=document.querySelector("body");

function ActivarDarkMode(){
    BarraJuego.forEach(barras => {
        barras.classList.add("dark-Mode")
        body.classList.add("dark-Mode")
    });
     localStorage.setItem("dark-Mode","activado");
}
function DesactivarDarkMode(){
    BarraJuego.forEach(barras => {
        barras.classList.remove("dark-Mode")
        body.classList.remove("dark-Mode")
    });
    localStorage.setItem("dark-Mode","desactivado");
}
if(DarkMode === "activado"){
    ActivarDarkMode();
}else{
    DesactivarDarkMode();
}
BotonDark.addEventListener("click",() => {
    DarkMode=localStorage.getItem("dark-Mode");
    if(DarkMode === "activado"){
        DesactivarDarkMode();
    }else{
        ActivarDarkMode();
    }
});


//!timer
let time=5;

const timer=document.createElement("h3")
timer.classList.add("Temporizador");

function tiempo(){
  const contador=setInterval(() => {
    timer.innerHTML=time;
     ZonaJuego.appendChild(timer);
    
     time--;
     if(time === -1){
      console.log("termino el contador")
      timer.remove();
      time=5;
      
      clearInterval(contador);
      tiempo();
     }
  }, 1000);
}
tiempo()


