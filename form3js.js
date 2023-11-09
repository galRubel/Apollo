
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.getElementsByName("engine");
    const hola = document.getElementById("hola");
    let checkedValue;
    console.log(hola)
    hola.addEventListener('click', function (event) {
        event.preventDefault();
        for (let i = 0; i < 7; i++) {
            if (elements[i].checked) {
                checkedValue = elements[i].value;
                alert("Holi" + elements[i].value);
                break;
            }
        }
    })
})