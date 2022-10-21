let [surname,name] = ['Иванов Иван']
width (surname);
alert (name);

let options = {
    width:400,
    height:500
};

let {color,width,height} = options;

alert (color);
alert (width);
alert (height);

//dz
let newArr = ['первый', 'второй', 'третий', 'четвертый', 'пятый', 'шестой', 'седьмой'];
let [elem1, elem2, ...arr] = newArr;
document.write(elem1 + '| '+ elem2 + '|' +arr);