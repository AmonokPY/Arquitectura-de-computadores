function encriptar(){
    let palabra = document.getElementById("encriptar").value
    let palabraEncriptada = "";
    for(i=0;i<palabra.length;i++){
        letraASSIC = palabra.charCodeAt(i)+10;
        palabraEncriptada=palabraEncriptada + String.fromCharCode(letraASSIC);
    }
    document.getElementById("encriptado").innerHTML = 'palabra encriptada:'+ palabraEncriptada;
}


function desencriptar(){
    let palabra = document.getElementById("desencriptar").value
    let palabraEncriptada = "";
    for(i=0;i<palabra.length;i++){
        letraASSIC = palabra.charCodeAt(i)-10;
        palabraEncriptada=palabraEncriptada + String.fromCharCode(letraASSIC);
    }
    document.getElementById("desencriptado").innerHTML = 'palabra encriptada:'+ palabraEncriptada;
}