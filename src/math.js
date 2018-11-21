export function sum(num1, num2) {
    return num1 + num2;
}

export function mul(num1, num2) {
    return num1 * num2;
}

export function sub(num1, num2) {
    return num1 - num2;
}

export function div(num1, num2) {
    if (!num2) {    // Matches +0, -0, NaN
        return NaN;
    }
    return num1 / num2;
}