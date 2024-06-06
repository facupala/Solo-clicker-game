// ctrl+k+c para comentar ctrl+k+u para descomentar
// console.log("funciona");
// alert("hola bienvenido al juego de pregunta random");
// let nombre = prompt("ingrese su nombre");
// let apellido = prompt("ingrese su apellido");
// let i=0;
// while(i<1){ 
//     if(nombre !== "" && apellido !== ""){
//         alert("Bienvenido"+" "+ nombre +" "+apellido);
//         i++;
//     }else if(nombre == ""){
//         alert("tiene que ingresar nombre");
//         nombre = prompt("ingrese nombre");  
//     }else if(apellido == ""){
//         alert("tieque que ingresa un apellido");
//         apellido = prompt("ingrese apellido");
//     }else{
//         alert("tiene que ingresar nombre y apellido");
//     }
// }
// function validarcoontraseña(){
//     alert("repita su contraseña");
//     let ValidarContr = prompt("");
//     if(NuevaContraseña === ValidarContr){
//       alert("su contraseña es correcta");
//       ++validado;
//       console.log("validado")
//     }else {
//       alert("es incorrecta ");
//     }
//   }
// let animal;
// do{
//     animal= parseInt(prompt("cual es tu animal preferido? \n1:Perro \n2:Gato \n3:serpiente \n4:animal mitico \n(ingrese un numero para elegir)"));
//     if(isNaN(animal)){
//         alert("tiene que ingresar un numero");
//     }
// } while(animal < 1 || animal > 4 ||isNaN(animal))
// switch(animal){
//     case 1:
//         alert("su animal seleccionado es 'Perro'");
//         break;
//     case 2:
//         alert("su animal seleccionado es 'Gato'");
//         break;
//     case 3:
//         alert("su animal seleccionado es 'Serpiente'");
//         break;
//     case 4:
//         alert("su animal seleccionado es 'animal mitico'");
//         break;
//     default:
//         alert("no marcaste la opcion correcta")
//         break;
// }
// let contraseña = prompt("Ingresar nueva contraseña del usaurio maximo 8 caracteres");
// let u =0
// while(u<1){ 
//     if (contraseña.length <= 8){
//         alert("contraseña aprobada");
//         u++ ;
//     }else{
//         alert("superaste el maximo de caracteres");
//         contraseña =prompt("Ingresar nueva contraseña del usaurio maximo 8 caracteres");
//     }
// }
// const NuevaContraseña = contraseña ;
// console.log(NuevaContraseña);

// let validado = 0;
//   while (validado < 1){
//     validarcoontraseña();
//      }


// let usuario1 ={
//     nombre : "ROCIO",
//     sexo : "femenino",
//     edad : 24,
//     puntaje : 1530,
     
// }
// console.log(usuario1);
// function jugadores (nombre,puntaje,nacionalidad){
//     this.nombre=nombre ;
//     this.puntaje=puntaje;
//     this.nacionalidad=nacionalidad;
//     this.saludar = function(){ console.log("hola "+ this.nombre)};
// }
// const jugador1 =new jugadores("Rocio",1540,"argentina");
// console.log(jugador1);
// jugador1.saludar();

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
alert("!Bienvenido al juego");
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
    alert("reiniciar puntaje");
    ResetearPuntaje();
    ActualizarTop();
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
const Musica = new Audio ("./musica/ost2.mp3");
const MPause=document.querySelector("#MusicInte");
MPause.addEventListener("click",() => {
    document.button.ClassList.toggle("Pause-mode");
 if(document.button.ClassList.contains("Pause-mode")){
    Musica.pause();
 }else{
    Musica.play();
 }
});
Musica.play();
console.log(jugadores);
