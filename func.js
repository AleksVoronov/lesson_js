//Замыкание это функция со всеми внешними переменными которые ей доступны

//const calc=(a, b)=>a+b;

/*function first(){
    setTimeout(() => {
        alert(1);
    }, 5000);
}
first();*/

/*function second() {
    console.log(2);
}
second();

function learnJS(lang, callback) {
    console.log(`Я учу:${lang}`);
    callback();
}
learnJS('JavaScript', function () {
    setTimeout(() => {
        console.log('Я прошел этот урок');
    }, 3000);
    
},)*/

const options = {
    name: 'test',
    width: 1024,
    heigt: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () {
        console.log('Test');
    }
};
options.makeTest();
const {border, bg}=options.colors;




for (const key in options) {
    if (typeof (options[key]) === 'object') {
        for (const i in options[key]) {
            console.log(`Свойство , ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство , ${key} имеет значение ${options[key]}`);
    }
   
}