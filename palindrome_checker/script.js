document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("passes");
    const result = document.getElementById("result");
    const button = document.getElementById("give");

    button.addEventListener('click', () => {
        const str = input.value.trim().toLowerCase();
        const reversed = str.split('').reverse().join('');

        if (str === reversed) {
            result.innerHTML = "It is a palindrome!";
        } else {
            result.innerHTML = "It is not a palindrome!";
        }
    });
});
