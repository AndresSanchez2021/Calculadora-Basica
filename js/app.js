
function sumar(){
    let forma = document.getElementById("forma");
    let a = (forma["valor1"]);
    let b = (forma["valor2"]);
    let r = parseInt(a.value)+parseInt(b.value);
    
    document.getElementById('resultado').innerHTML= r;
}

/*------------Calculadora---------------------*/ 
let a = 0;
let b = 0;

document.getElementById("valor1").addEventListener("change", (e)=>{
    document.getElementById("resultado").innerHTML=e.target.value;
})
document.getElementsByClassName("R").addEventListener("click", realizarOperacion(e));

let r =function realizarOperacion(e){
    let string = e.target.value;
    for(i=0;i<length(string);i++){
        console.log(string[i]);
    }
}

