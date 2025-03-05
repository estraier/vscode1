function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    const limit = Math.sqrt(num);
    for (let i = 5; i <= limit; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

for (let i = 1; i <= 2000; i++) {
    if (isPrime(i)) {
        console.log(i + " is prime");
    }
}