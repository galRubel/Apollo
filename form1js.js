
  
document.addEventListener("DOMContentLoaded", () => {
 
    const hola = document.getElementById("hola");
    const fecha = document.getElementById("fecha");
    const formUno = document.getElementById("formUno");
    const formDos = document.getElementById("formDos");
    const formCuatro = document.getElementById("formCuatro");
    const body = document.getElementById("body");
    const pantallaTres = document.getElementById("pantallaTres");
    const formTres = document.getElementById("formTres");
    const  guardar = document.getElementById("guardar");
    const elements = document.getElementsByName("engine");
    const segundo = document.getElementsByName("segundo");
    const preguntaUno = document.getElementById("pregunta1");
    const preguntaDos= document.getElementById("pregunta");
    const preguntaTres =document.getElementById("peso");
    const preguntaCuatro =document.getElementById("preguntaCuatro");
    const preguntaCinco=document.getElementById("preguntaCinco");
    const preguntaSeis=document.getElementById("preguntaSeis");
    const preguntaSiete=document.getElementById("preguntaSiete");
    const preguntaOcho=document.getElementById("preguntaOcho");
    const preguntaNueve=document.getElementById("preguntaNueve");
    const preguntaDiez=document.getElementById("preguntaDiez");
    const preguntaOnce=document.getElementById("preguntaOnce");
    const tomaste=document.getElementById("tomaste");

    alert("holaaaaa")
    formDos.style.opacity = 0;

    formDos.disabled = true;
    formDos.style.display='none';
    formDos.style.height=0;
  
    formTres.style.opacity = 0;
    formTres.style.display='none';
    formTres.disabled = true;
    formTres.style.height=0;

    formCuatro.style.opacity = 0;   
    formCuatro.style.display='none';
    formCuatro.disabled = true;
    formCuatro.style.height=0;

    let resultado;
    let debiles_input;
    let dialisis_input;
    let piedras_input;

    let peso_input;
    let altura_input;
    let ejercicio_input;
    let edad_input;

let debiles_menos1 = 0
let debiles_1 = 0
let debiles_2 = 1
let debiles_9 = 0
let dialisis_menos1 = 0
let dialisis_1 = 0
letdialisis_2=1

    let dias_cigarrillos_input;
    let alcohol_por_dia_input;
    let dias_alcohol_input;
    let comida_no_casera_input;
    let comida_rapida_input;
    let comida_lista_input;
    alert("chaussss")
    let comida_congelada_input;
    let resUno;
    let resDos;

    hola.addEventListener('click', function (event) {
        event.preventDefault();
        
        if(preguntaUno.checked){
            debiles_input= 1;}
        else{
            debiles_input= 0;}
        if(preguntaDos.checked){
            dialisis_input= 1;}
        else{  dialisis_input= 0;}
        piedras_input = preguntaTres.value
        alert(piedras_input + "a")
        formUno.disabled = true;
        formUno.style.display='none';
        formUno.style.height=0;

        formDos.style.opacity=1;
        formDos.disabled = false;
        formDos.style.display='flex';
        formDos.style.height=100;
    })
    guardar.addEventListener('click', function (event) {
        event.preventDefault();
        peso_input =( preguntaCuatro.value * 2.05)
        altura_input =(preguntaCinco.value/2.54)
        ejercicio_input =preguntaSeis.value
        edad_input = (fecha.value * 12)
        formDos.disabled = true;
        formDos.style.display='none';
        formDos.style.height=0;

        formTres.style.opacity=1;
        formTres.disabled = false;
        formTres.style.display='flex';
        formTres.style.height=100;  
            })

    pantallaTres.addEventListener('click', function (event) {
        event.preventDefault();
        formTres.style.display='none'
        formTres.disabled=true;
        formTres.style.opacity=0;
        formTres.style.height=0;
        alert("holi")
        formCuatro.style.opacity = 1;   
        formCuatro.style.display='flex';
        formCuatro.disabled = false;
        formCuatro.style.height=100;
        alcohol_por_dia_input= tomaste.value
        cigarrillos_por_dia_input = preguntaSiete.value;
    
        for (let i = 0; i < 7; i++) {
            if (elements[i].checked) {
                dias_cigarrillos_input = elements[i].value;
                break;} 
                if (segundo[i].checked) {
                    dias_alcohol_input = segundo[i].value;
                    break;
                }}

                console.log("holi")
    pantallaTres.addEventListener('click', function (event) {
        event.preventDefault();
        comida_no_casera_input= preguntaOcho.value;
        comida_rapida_input=preguntaNueve.value;
        comida_lista_input=preguntaDiez.value;
        comida_congelada_input=preguntaOnce.value;
        console.log("holi 2")
    
})

alert("hola 1");
   const fetch = async function main() {
            await fetch("http://localhost:3000/predecir/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
        'Edad': edad_input,
        'Altura': altura_input,
        'Peso':  peso_input,
        'Ejercicio': ejercicio_input,
        'Piedras': piedras_input,
        'Días cigarillos':   dias_cigarrillos_input,
        'Cigarrillos/d': cigarrillos_por_dia_input,
        'Días alcohol':dias_alcohol_input,
        'Alcohol/d':  alcohol_por_dia_input,
        'Comida no casera': comida_no_casera_input,
        'Comida rápida': comida_rapida_input,
        'Comida lista':  comida_lista_input,
        'Comida congelada':  comida_congelada_input,
        
        'Debiles_-1':debiles_menos1,
        'Debiles_1':debiles_1,
        'Debiles_2': debiles_2,
        'Debiles_9': debiles_9,
        'Dialisis_-1': dialisis_menos1,
        'Dialisis_1': dialisis_1,
        'Dialisis_2': dialisis_2,
       
    })
    

})   
alert("hola 2");     
const resultado=  async function main() {
  
       await res.json();
      }
     
      if (res.ok) {
        alert(resultado)
        
    } else {
        alert("No se ha podido predcir un resultado,por favor intente de vuelta")
    }
}
console.log("hola");
})
console.log("holi")
})

