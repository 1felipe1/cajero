 // Obtener referencias a los elementos del DOM
 const usernameInput = document.getElementById('username');
 const passwordInput = document.getElementById('password');
 const btnLogin = document.getElementById('btnLogin');
 
 // Asignar evento de click al botón de inicio de sesión
 btnLogin.addEventListener('click', login);
 
 // Función de inicio de sesión
 function login() {
   const username = usernameInput.value;
   const password = passwordInput.value;
   
   // Verificar las credenciales
   if (username === 'yax' && password === '1111') {
     // Iniciar sesión para el usuario 1
     alert('Inició sesión el usuario 1.');
     // Aquí puedes agregar el código correspondiente para el usuario 1
   } else if (username === 'pipe' && password === '1112') {
     // Iniciar sesión para el usuario 2
     alert('Inició sesión el usuario 2.');
     // Aquí puedes agregar el código correspondiente para el usuario 2
   } else if (username === 'luis' && password === '1113') {
     // Iniciar sesión para el usuario 3
     alert('Inició sesión el usuario 3.');
     // Aquí puedes agregar el código correspondiente para el usuario 3
   } else {
     // Credenciales incorrectas
     alert('Credenciales incorrectas. Inténtalo de nuevo.');
   }
   
   // Limpiar los campos de entrada
   usernameInput.value = '';
   passwordInput.value = '';
 }



// Variable para almacenar el saldo inicial
let saldo = 0;

const btnDepositar = document.getElementById('btnDepositar');
const btnRetirar = document.getElementById('btnRetirar');
const btnVerSaldo = document.getElementById('btnVerSaldo');

// Asignar eventos y llamar a las funciones correspondientes
btnDepositar.addEventListener('click', depositar);
btnRetirar.addEventListener('click', retirar);
btnVerSaldo.addEventListener('click', verSaldo);

// Función para depositar dinero
function depositar() {
  const cantidad = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (cantidad > 0) {
    saldo += cantidad;
    console.log(`Has depositado ${cantidad} unidades.`);
  } else {
    console.log("La cantidad a depositar debe ser mayor a cero.");
  }
}

// Función para retirar dinero
function retirar() {
  const cantidad = parseFloat(prompt("Ingrese la cantidad a retirar:"));
  if (cantidad > 0) {
    if (saldo >= cantidad) {
      saldo -= cantidad;
      console.log(`Has retirado ${cantidad} unidades.`);
    } else {
      console.log("Saldo insuficiente.");
    }
  } else {
     console.log("La cantidad a retirar debe ser mayor a cero.");
  }
}

// Función para ver el saldo actual
function verSaldo() {
    console.log(`Tu saldo actual es: ${saldo} unidades.`);
}

// Ejemplo de uso
depositar();
verSaldo();
retirar();
verSaldo();
