const add = (first, second) => first + second;
const multiply = (first, second) => first * second;

const getTotalPrice = products => {
    const total = products.reduce((previous, current) => previous + current.price, 0);
    return total;
}

export { add, multiply, getTotalPrice as totalPrice };

