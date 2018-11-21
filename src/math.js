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
    return (!num2) ? NaN : num1 / num2;     // (!num2) matches +0, -0, NaN
}