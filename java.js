Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
  })


//! (Descargue la extension llamada better comments)
//! la puntuacion inicializa en 0



PlayerPoint=document.querySelector("#Puntuacion");
PlayerPoint.innerHTML="<Strong>"+0+"</Strong>";
//! FUNCIONES 
function ValidarNombre(){
    if(nombre.length <= 10 && nombre !== ""){
        alert("Gracias por participar "+nombre);
        y++;
    }else if(nombre == ""){
        alert("tiene que poner un nombre");
        nombre=prompt("ingrese su Nickname para poder jugar(MAX 10 Caracteres)");
    }else {
        alert("superaste el limite de caracteres");
        nombre=prompt("ingrese su Nickname para poder jugar(MAX 10 Caracteres)");
    }

}
function SumarPuntos(){
    alert("+1 punto")
    jugardor1.puntaje++;
    PlayerPoint=document.querySelector("#Puntuacion");
    PlayerPoint.innerHTML="<Strong>"+jugardor1.puntaje+"</Strong>";
}
function ActualizarTop(){
    TopLista.innerHTML='';//!.innerHTML = ''; se utiliza para borrar todo el contenido interno de un elemento. Al asignar una cadena vacía ('') a la propiedad .innerHTML de un elemento, se eliminan todos los elementos hijos y el contenido textual que el elemento pueda tener.
    jugadores.sort((a,b) => b.puntaje - a.puntaje);
    for(i=0,o=1;i < jugadores.length; i++ , o++){
        console.log("TOP:"+o+" "+jugadores[i].nombre+" "+jugadores[i].puntaje);
        TopLista=document.querySelector("#TOPLista");
        TopLista.innerHTML +="<li>"+o+" "+jugadores[i].nombre+" "+jugadores[i].puntaje+"</li>";
        
    }
}
function ResetearPuntaje(){
    jugardor1.puntaje=0;
    PlayerPoint=document.querySelector("#Puntuacion");
    PlayerPoint.innerHTML="<Strong>"+jugardor1.puntaje+"</Strong>";
    ActualizarTop();
    
}
function moverPunto() {
    const ZonaJuego=document.querySelector("#ZonaJuego");
    const maxWidth = ZonaJuego.clientWidth - clicker.clientWidth;
    const maxHeight = ZonaJuego.clientHeight - clicker.clientHeight;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);
    clicker.style.left = `${randomX}px`;
    clicker.style.top = `${randomY}px`;
}
function playRandomEffect() {
    const RandomEffect = Math.floor(Math.random() * EffectAtack.length);
    const audio = new Audio(EffectAtack[RandomEffect]);
    audio.play();
}
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
let nombre=prompt("ingrese su Nickname para poder jugar(MAX 10 Caracteres)");
let resetpunt=nombre;
let puntaje=0;
function ValidarNombre(){
        if(nombre.length <= 10 && nombre !== ""){
            alert("Gracias por participar "+nombre);
            y++;
        }else if(nombre == ""){
            alert("tiene que poner un nombre");
            nombre=prompt("ingrese su Nickname para poder jugar(MAX 10 Caracteres)");
        }else {
            alert("superaste el limite de caracteres");
            nombre=prompt("ingrese su Nickname para poder jugar(MAX 10 Caracteres)");
        }
    
}
let y =0
while(y<1){
ValidarNombre(nombre)
}
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
//! SUMAMOS LA INFO DEL JUGADOR AL ARRAY
const jugardor1= new players(nombre,puntaje);
jugadores.push(jugardor1)
NickNam=document.querySelector("#NickName");
NickNam.innerHTML= "<Strong>JUGADOR:"+" "+jugardor1.nombre+"</Strong>";


//!se crea la lista inicial antes de empezar hacer click (cuando hacemos click esta lista se borra y la remplaza la de la function)
jugadores.sort((a,b) => b.puntaje - a.puntaje);
for(i=0,o=1;i < jugadores.length; i++ , o++){
    console.log("TOP:"+o+" "+jugadores[i].puntaje);
    TopLista=document.querySelector("#TOPLista");
    TopLista.innerHTML +="<li>"+o+": "+jugadores[i].nombre+" "+jugadores[i].puntaje+"</li>";
    
}


//! por ahora no Funciona bien reproduce la primera vez pero cuando le das reiniciar a la pagina tira un error 
// const Musica = new Audio ("./musica/ost2.mp3");
// const MPause=document.querySelector("#Musicost");
// const audio=document.querySelector("#musicafondo");
// window.addEventListener('load', () => {
//     audio.play().catch(error => {
//         console.error('La reproducción automática falló: ',error);
//     });
// });


// let MusicaFondo=localStorage.getItem("musica");
// localStorage.setItem("musica","activado");



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
