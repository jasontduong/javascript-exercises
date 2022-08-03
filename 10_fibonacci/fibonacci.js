const fibonacci = n => {
    if (Number.isInteger(n)) {
        if (n <= 1 && n >= 0) {
            return n;
        }
        if (n < 0) {
            return "OOPS"
        } else {
            return fibonacci(n - 1) + fibonacci(n - 2);
        }
    } else {
       const k = parseInt(n);
       
       if (k <= 1 && k >= 0) {
        return k;
       }
       if (k < 0) {
        return "OOPS"
       } else {
        return fibonacci(k - 1) + fibonacci(k - 2);
       }
    }
};

// Do not edit below this line
module.exports = fibonacci;
