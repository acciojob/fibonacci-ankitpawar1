function fibonacci(num) {
// your code here
	if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
const result = fibonacci(5);
const fibonacciResultElement = document.getElementById("fibonacciResult");
fibonacciResultElement.textContent = result;

module.exports = fibonacci;
