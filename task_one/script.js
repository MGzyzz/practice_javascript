let operations = ['+', '-', '*', '/'];
let choose = prompt('Введите знак для выполнение операции')

if (operations.includes(choose)) {
    let num1 = parseFloat(prompt('Введите первое число'));
    let num2 = parseFloat(prompt('Введите второе число'));

    let result;
    switch (choose) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
        default:
            console.log('Неверное значение')

    }
    console.log(result)
} else {
    console.log('Неверная операция')
}