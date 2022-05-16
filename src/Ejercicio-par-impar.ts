// let n: number = Number("");

// for (n >= 1; (n = Number); n++) {
//   n = Number(prompt("Ingrese un número mayor a 0"));
//   if (n === 0) {
//     alert("Vuelva a ingresar un numero");
//   } else if (n % 2 == 0) {
//     console.log("El número " + n + " es par");
//     break;
//   } else {
//     console.log("El número " + n + " es impar");
//     break;
//   }
// }

// let n: number;

// while (n >= 1) {
//   n = Number(prompt("Ingrese un Número mayor a cero"));
//   if (n === 0) {
//     alert("Vuelva a ingresar un numero");
//   } else if (n % 2 === 0) {
//     console.log("El número " + n + " es par.");
//     break;
//   } else {
//     console.log("El número " + n + " es impar.");
//     break;
//   }
// }

let n: number;
n = Number("");

while (n > 0) {
  n = Number(prompt("Ingrese un número mayor a cero."));
  if (n === 0) {
    alert("Vuelva a ingresar un número.");
  } else if (n % 2 === 0) {
    console.log("El número " + n + " es par.");
    break;
  } else {
    console.log("El número es impar.");
    break;
  }
}
