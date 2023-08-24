person = parseFloat(prompt('Напишите число для отображение таблицы умножение'))
let massive = []
for (i = 1; i <= person && i != 11; i++) {
    massive.push(`${person} * ${i} = ${person * i}`)
}
alert(massive.join('\n'))