
document.addEventListener("DOMContentLoaded", () => {
    const pregUno = document.getElementById("pregunta1");
    const pregDos = document.getElementById("pregunta2");
    const peso = document.getElementById("peso");
    const hola = document.getElementById("hola");
    let resUno;
    let resDos;
    console.log(hola)
    hola.addEventListener('click', function (event) {
        event.preventDefault();
            if( pregUno.value == "on")
            {
                resUno == 1;
            } 
            else {
                resUno=0;
                }
            if( pregDos.value == "on")
                {
                    resDos == 1;
                } 
            else {
                    resDos=0;
                }
            
                

        
            
        }
    )
})