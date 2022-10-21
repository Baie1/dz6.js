function func(a = 'Аноним') {
	alert('Привет, '+ a );
}

let name = 'Юзернейм';
func();

let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
newArr.reverse();
let [elem1, elem2] = newArr;
document.write(elem1 + '|'+ elem2);