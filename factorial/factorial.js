function calcularFactorial() {
    const num1 =Number(document.getElementById("num1").value);
    const num2 =Number(document.getElementById("num2").value);
    let suma = num1+num2;
    
    
    document.getElementById("resultado").textContent = `la suma de ${num1} y ${num2} : ${suma}`;
}
function cancelarFactorial() {
     document.getElementById("num").value = "";
    document.getElementById("resultado").textContent = "";
 }