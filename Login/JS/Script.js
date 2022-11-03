const login = (Bton1, Bton2) => {
  Bton2 = document.getElementById('Usuario'),
  Bton1 = document.getElementById('Persona');

  Bton2.addEventListener("click", () => {
    alert("Bienvenidos")
  })
  Bton1.addEventListener("click", () => {
    alert("Recuerde Iniciar Sesion")
  })
}
login();
//Realizar que al ingresar datos los envie y los almacene
