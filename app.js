// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = []; 
let tamaño;


function agregarAmigo(){
    tamaño = listaAmigoSecreto.length;
    let amigoSecreto = document.getElementById('amigo').value;
    let num = validar();
    console.log(num);
        if(amigoSecreto === ""){
            alert("nombre invalido, ingresa un amigo correcto");
        }else{
            if(listaAmigoSecreto.includes(amigoSecreto)){
                alert("Este amigo secreto ya lo ingreso, ingrese uno nuevo");
            }else{
                listaAmigoSecreto.push(amigoSecreto);
                console.log(listaAmigoSecreto);
                limpiar();
                // mostrarAmigosUl(amigoSecreto);
                recorrerLista();
            }                     
        }              
}
function limpiar(){
        document.getElementById('amigo').value ='';
}
function validar(){
    let con;
    tamaño = listaAmigoSecreto.length;
    let texto = document.getElementById('amigo').value;
    for(let i=0; i<tamaño; i++){
        if(texto === listaAmigoSecreto[i]){
            con = 1;          
            limpiar();
        }else{
            con = 0;
        }   
    }
    return con;
}
function mostrarAmigosUl(texto){
    listaAmigos.innerHTML += `<li> ${texto} </li>`;
}
function recorrerLista(){
    tamaño = listaAmigoSecreto.length;
    document.getElementById("listaAmigos").innerHTML = "";
    //listaAmigos.innerHTML = "";
   for(let i=0; i<tamaño; i++){
        document.getElementById("listaAmigos").innerHTML += `<li> ${listaAmigoSecreto[i]} </li>`;    
    }
}
function limpiarRecorrerLista(){
    document.getElementById("listaAmigos").innerHTML = "";
}
function sortearAmigo(){
    let tamaño = listaAmigoSecreto.length;
    let seleccion = parseInt(Math.random()*tamaño);
    document.getElementById("resultado").innerHTML += `<li> ${listaAmigoSecreto[seleccion]} </li>`
    limpiar();
    limpiarRecorrerLista();
}
