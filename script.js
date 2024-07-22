function fibonacci(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

function calculateFibonacci() {
    const num = parseInt(document.getElementById('fibonacciInput').value);
    if (isNaN(num) || num < 0 || num > 50) {
        alert('Please enter a positive integer between 0 and 50.');
        return;
    }
    const result = fibonacci(num);
    document.getElementById('fibonacciResult').innerText = result;
}
