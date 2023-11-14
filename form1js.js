document.addEventListener("DOMContentLoaded", () => {
    const pregUno = document.getElementById("pregunta1");
    const pregDos = document.getElementById("pregunta2");
    const hola = document.getElementById("hola");
    const formUno = document.getElementById("formUno");
    const formDos = document.getElementById("formDos");
    const body = document.getElementById("body");
    const pantallaTres = document.getElementById("PantallaTres");
    const formTres = document.getElementById("formTres");
    const  guardar = document.getElementById("guardar");
    const elements = document.getElementsByName("engine");
    let checkedValue;
    formDos.style.opacity = 0;
    formDos.disabled = true;
    formTres.style.opacity = 0;
    formTres.disabled = true;
    let resUno;
    let resDos;
    hola.addEventListener('click', function (event) {
        event.preventDefault();
        formUno.remove();
        formDos.style.opacity=1;
            if( pregUno.value == "on")
            { resUno == 1;} 
            else 
            {resUno=0;}
            if( pregDos.value == "on")
                {resDos == 1;} 
            else 
                {resDos=0;}   
    })
    guardar.addEventListener('click', function (event) {
        event.preventDefault();
        formDos.remove();
        formTres.style.opacity=1;
            for (let i = 0; i < 7; i++) {
                if (elements[i].checked) {
                    checkedValue = elements[i].value;
                    alert("Holi" + elements[i].value);
                    break;}}
            if( pregUno.value == "on")
                { resUno == 1;} 
            else 
                {resUno=0;}
            if( pregDos.value == "on")
                {resDos == 1;} 
            else 
                {resDos=0;}   
            })
    pantallaTres.addEventListener('click', function (event) {
        event.preventDefault();
        formTres.remove();
        formTres.style.opacity=1;
            for (let i = 0; i < 7; i++) {
                if (elements[i].checked) {
                    checkedValue = elements[i].value;
                    alert("Holi" + elements[i].value);
                    break;}}
                if( pregUno.value == "on")
                    { resUno == 1;} 
                else 
                    {resUno=0;}
                if( pregDos.value == "on")
                    {resDos == 1;} 
                else 
                    {resDos=0;}   
                    })
})