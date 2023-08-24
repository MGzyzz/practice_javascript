person = parseFloat(prompt('Напишите число для отображение таблицы умножение'))

for (i = 1; i <= person && i != 11; i++) {
    alert(`${person} * ${i} = ${person * i}`);
}