let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let choose = prompt('Введите число от 1 до 7');

let result;
switch (choose) {
    case '1':
        result = days[0]
        break
    case '2':
        result = days[1]
        break
    case '3':
        result = days[2]
        break
    case '4':
        result = days[3]
        break
    case '5':
        result = days[4]
        break
    case '6':
        result = days[5]
        break
    case '7':
        result = days[6]
        break
    default:
        alert('Неверное значение')
}
alert(result);