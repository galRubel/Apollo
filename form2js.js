const inputField = document.getElementById("dia");
const input = document.getElementById("mes");
inputField.addEventListener("input", function() {
    const currentCount = inputField.value.length;
    const maxLength = 2
    
    
    
    // Disable input when the character limit is reached (optional)
    if (currentCount >= maxLength) {
        inputField.value = inputField.value.slice(0, maxLength);
    } else {
        inputField.disabled = false;
    }
    if (input >= maxLength) {
        inputField.value = input.value.slice(0, maxLength);
    } else {
        input.disabled = false;
    }
});
