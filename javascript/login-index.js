const body=document.querySelector("body");
const header=document.querySelector("header");

const divTitle=document.createElement("div");
divTitle.classList.add("box-login");
const H1Title=document.createElement("h1");
H1Title.classList.add("SoloTitle");
H1Title.innerHTML="Solo Clicker";
const form=document.createElement("form");
form.innerHTML=' <label for="playerName">Ingrese su Nickname jugador:</label>'+
'<input type="text" placeholder="Aprete enter al terminar " id="playerName" name="playerName" required>';
const botonPlay=document.createElement("button");
botonPlay.classList.add("BotonLogin");
botonPlay.innerHTML='<a class="LinkJugar">Jugar</a>';

header.appendChild(divTitle);
divTitle.appendChild(H1Title);
divTitle.appendChild(form);
divTitle.appendChild(botonPlay);
localStorage.setItem("playerName", "");


console.log(playerName);

botonPlay.addEventListener("click" ,() => {
  const playerName = document.getElementById('playerName').value;
  localStorage.setItem("playerName", playerName);
    console.log(playerName)

    if (playerName.trim() !== "") {
        Swal.fire({
            imageUrl: "./img/icono solo leveling.webp",
            title: `Gracias por participar ${playerName}`,
            confirmButtonText: "Continuar",

          }).then((result) => {
            if (result.isConfirmed) {
              setTimeout(() => {
            window.location.href="./juego.html";
        }, 0);
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    }else{
        swal.fire(`tienes que ingresar un nombre aprete "Enter" cuando termine de ingresar el nombre`)
        console.log("error")
    }
})