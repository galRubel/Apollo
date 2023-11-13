document.addEventListener("DOMContentLoaded", () => {
    const pregUno = document.getElementById("pregunta1");
    const pregDos = document.getElementById("pregunta2");
    const peso = document.getElementById("peso");
    const hola = document.getElementById("hola");
    const formUno = document.getElementById("formUno");
    const formDos = document.getElementById("formDos");
    const body = document.getElementById("body");
    formDos.style.opacity = 0;
    formDos.disabled = true;
    let resUno;
    let resDos;
    console.log(hola + "AAAAAAAAAA")
    hola.addEventListener('click', function (event) {
        event.preventDefault();
        formUno.remove();
        formDos.style.opacity=1;
        body.style.flexDirection="column-reverse";
            if( pregUno.value == "on")
            { resUno == 1;} 
            else 
            {resUno=0;}
            if( pregDos.value == "on")
                {resDos == 1;} 
            else 
                {resDos=0;}   
        }
    )
})