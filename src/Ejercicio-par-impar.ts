// btncalcular.addEventListener("click", () => {
//   let dato = document.getElementById("numero");
//   let numero: number = dato.value;
//   if (numero == 0) {
//     console.log("El número " + numero + " no es par ni impar");
//   } else if (numero % 2 == 0) {
//     console.log("El número " + numero + " es par");
//   } else {
//     console.log("El número " + numero + " es impar");
//   }
// });

// let numero : number = Number("");
// let num : number = Number("");
let n: number = Number("");

for (n >= 1; n <= 10; n++) {
  let n = Number(prompt("Ingrese un número mayor a 0"));
  if (n === 0) {
    alert("Vuelva a ingresar un numero");
    // console.log("Ingrese un número mayor a 0");
  } else if (n % 2 == 0) {
    console.log("El número " + n + " es par");
    break;
  } else {
    console.log("El número " + n + " es impar");
    break;
  }
}
