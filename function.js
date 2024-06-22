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