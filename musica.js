let BackgroundMusic=new Audio("./musica/ost2.mp3");
// let BackgroundMusic=document.querySelector("#BackgroundMusic");
const BotonMusica=document.querySelector("#Musicost")
let MusicaFondo=localStorage.getItem("Musica-Fondo");

BackgroundMusic.loop=true;
function ActivarMusica(){
  BotonMusica.classList.add("Musica-ON");
  BotonMusica.classList.remove("Musica-OFF");
  BackgroundMusic.play();
  localStorage.setItem("Musica-Fondo","activado");
}
function DesactivarMusica(){
  BotonMusica.classList.remove("Musica-ON");
  BotonMusica.classList.add("Musica-OFF");

  BackgroundMusic.pause();
  localStorage.setItem("Musica-Fondo","desactivado");
}
if(MusicaFondo === "activado"){
  ActivarMusica();
}else{
  DesactivarMusica();
};
BotonMusica.addEventListener("click",() => {
  MusicaFondo=localStorage.getItem("Musica-Fondo");
if(MusicaFondo === "activado"){
 DesactivarMusica();
}else{
  ActivarMusica();
}
});

