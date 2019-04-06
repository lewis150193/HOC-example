
function test(number,number3){
    return function (number1) {
        return number1 + number3+ number
    }
}

const obj1 = {name: 'Lewis', age: 99};
const obj2 = {name: 'Luke', age: 43};
const obj3 = {name: 'Logan', age: 54};

console.log(test(obj1.name,obj2.name)(obj3.age));


console.log(test('Hello ','+')('World'));