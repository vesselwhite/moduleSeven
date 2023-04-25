/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств.
Данная функция не должна возвращать значение. */

function printOwnKeysAndProperties(obj){
    for(let key in obj){
        if(obj.hasOwnProperty){
            console.log(key, obj[key]);
        }
    }
}

const persons = {

    class: 'mammals',

    respiratorySystem: 'lungs',

}

const user = {

    name: 'Andrei',

    surname: 'Ivanov',

    age: 18,

    position: 'developer',

};

printOwnKeysAndProperties(user);
