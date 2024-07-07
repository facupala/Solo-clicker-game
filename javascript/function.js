function SumarPuntos(){
    jugardor1.puntaje++;
    PlayerPoint=document.querySelector("#Puntuacion");
    PlayerPoint.innerHTML="<Strong>"+jugardor1.puntaje+"</Strong>";
}
function ActualizarTop(){
    TopLista.innerHTML='';//!.innerHTML = ''; se utiliza para borrar todo el contenido interno de un elemento. Al asignar una cadena vacía ('') a la propiedad .innerHTML de un elemento, se eliminan todos los elementos hijos y el contenido textual que el elemento pueda tener.
    jugadores.sort((a,b) => b.puntaje - a.puntaje);
    for(i=0,o=1;i < jugadores.length; i++ , o++){
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

function Efectosslash() {
    const efectogolpe=document.createElement("p");
efectogolpe.classList.add("Efectosumar");
efectogolpe.innerHTML=daño
        ZonaJuego.appendChild(efectogolpe);
}

let TiempoDaño=5;
function AutodañoTiempo(){
const TiempoAutodaño=setInterval(() => {
    TiempoDaño--;
    
    console.log(TiempoDaño);
    if(TiempoDaño === 0){
        console.log("termino el contador");
        vida-=Autodaño;
        Monstervida.innerHTML=vida
        TiempoDaño=5
        console.log(vida)
        Cambiomonster();
        clearInterval(TiempoAutodaño);
        AutodañoTiempo();
    }
    
}, 1000);
}