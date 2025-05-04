function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    const limit = Math.sqrt(n);
    for (let i = 3; i <= limit; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }
  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('numInput');
    const result = document.getElementById('result');
    const button = document.getElementById('checkBtn');
  
    button.addEventListener('click', () => {
      const value = parseInt(input.value, 10);
  
      if (isNaN(value)) {
        result.textContent = 'Please enter a valid number.';
        return;
      }
  
      if (isPrime(value)) {
        result.textContent = `${value} is a prime number `;
      } else {
        result.textContent = `${value} is not a prime number`;
      }
    });
  });
  