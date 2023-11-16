document.addEventListener("DOMContentLoaded", () => {
    const pregUno = document.getElementById("pregunta1");
    const pregDos = document.getElementById("pregunta2");
    const hola = document.getElementById("hola");
    const formUno = document.getElementById("formUno");
    const formDos = document.getElementById("formDos");
    const formCuatro = document.getElementById("formCuatro");
    const body = document.getElementById("body");
    const pantallaTres = document.getElementById("PantallaTres");
    const formTres = document.getElementById("formTres");
    const  guardar = document.getElementById("guardar");
    const elements = document.getElementsByName("engine");
    let checkedValue;
    
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

    let resUno;
    let resDos;
    hola.addEventListener('click', function (event) {
        event.preventDefault();
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
                formDos.style.display=none
                formTres.style.display=flex;
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

