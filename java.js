
//! (Descargue la extension llamada better comments)
//! la puntuacion inicializa en 0
PlayerPoint=document.querySelector("#Puntuacion");
PlayerPoint.innerHTML="<Strong>"+0+"</Strong>";

//!NO FUNCIONA BIEN
// function MonsterEnemyRandom() {
//     const RandomMonster=Math.floor(Math.random() * MonsterEnemy.length)
//     const MonsterRandom= MonsterEnemy[RandomMonster];
//     EnemyClick= querySelector("#EnemyClickerPoint");
//     EnemyClick.innerHTML=`<img src="${MonsterRandom}" class="monster-image" alt="Monstruo">`;

// }
//! CREAMOS UN CONSTRUCTOR PARA LOS JUGADORES
class players{
    constructor(nombre,puntaje,nacionalidad){
        this.nombre=nombre ;
    this.puntaje=puntaje;
    this.nacionalidad=nacionalidad;
    }
}
//!CREAMOS UN ARRAY PARA LOS JUGADORES Y SONIDO
// const MonsterEnemy=[
//     "./Monster/monster1.webp",
//     "./Monster/monster2.webp",
//     "./Monster/monster3.png",
//     "./Monster/monster4.webp"
// ]
const EffectAtack=[
    "./musica/espada1.mp3",
    "./musica/espada2.mp3",
    "./musica/espada3.mp3",
    "./musica/espada4.mp3"
]

const jugadores=[
    {nombre:"Guillermo", puntaje:25,},
    {nombre:"rocio2",    puntaje:15,},
    {nombre:"Facundo",   puntaje:5,},
    {nombre:"carlos",    puntaje:24,},
    {nombre:"ditto",     puntaje:30.},
 ];
//!  INTEREACTUAMOS CON EL USUARIO Y SUMAMOS SUS DATO AL ARRAY
 
 let nombre=localStorage.getItem("playerName");

 let puntaje=0;
 let y =0

//! SUMAMOS LA INFO DEL JUGADOR AL ARRAY
let jugardor1= new players(nombre,puntaje);
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
            moverPunto();
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
    
    
    moverPunto();
    
})
//! cada vez que hacemos click suma 1 punto al jugador
const clicker=document.querySelector("#PointButton");
clicker.addEventListener("click",() => {
    SumarPuntos();
    ActualizarTop();
    moverPunto();
    playRandomEffect();
    // MonsterEnemyRandom();
});

//!se crea la lista inicial antes de empezar hacer click (cuando hacemos click esta lista se borra y la remplaza la de la function)

jugadores.sort((a,b) => b.puntaje - a.puntaje);
for(i=0,o=1;i < jugadores.length; i++ , o++){
    console.log("TOP:"+o+" "+jugadores[i].puntaje);
    TopLista=document.querySelector("#TOPLista");
    TopLista.innerHTML +="<li>"+o+": "+jugadores[i].nombre+" "+jugadores[i].puntaje+"</li>";
    
};


//! MUSICA 

//!DARK MODE CON LOCAL STORAGE
const BotonDark=document.querySelector("#Boton-Modo-Dark");
const BarraJuego=document.querySelectorAll(".Barra");
let DarkMode=localStorage.getItem("dark-Mode");


function ActivarDarkMode(){
    BarraJuego.forEach(barras => {
        barras.classList.add("dark-Mode")
    });
     localStorage.setItem("dark-Mode","activado");
}
function DesactivarDarkMode(){
    BarraJuego.forEach(barras => {
        barras.classList.remove("dark-Mode")
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
