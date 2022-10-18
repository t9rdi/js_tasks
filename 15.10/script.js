//Напишите функцию hello(), которая при вызове будет возвращать строку:
//«Привет, JavaScript!»

function showMessage(message) {
    alert(message);
}

showMessage('«Привет, JavaScript!»');
showMessage('«Hello, JavaScript!»');


function cub(a=5) {
    return alert(a * a * a);
}

cub();


function getName() {
    let name;
    alert('Привет,' + name);
    if (name === undefined){
        alert('Привет,гость')
    }
}
getName()


function solutiondoubling(example) {
    let result = [];
    for (let i = 0; i < example.length; i++) {
        result.push(example[i] * 2);
    }

    return console.log(result);
}

solutiondoubling([2,2,2,2,2,2]);




































































