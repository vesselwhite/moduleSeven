/* Написать функцию, которая принимает в качестве аргументов строку и объект,
а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

function checkProperties(str, obj){
    for(let key in obj){
        if(str === obj[key]){
            return true;
        }
        else{
            return false;
        }
    }
}

let str = 'Vasya';

let userInfo = {

    name: 'Vasya',

    age: 32,

}

console.log(checkProperties(str, userInfo));
