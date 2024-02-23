var nombre='JANNETE';
var edad =24;
var estatura ;
console.log('Nombre: '+nombre,'Edad: '+edad,'Estatura: ');
let apellidos='GONZALEZ';
console.log('Apeido: '+apellidos);
let ESCUELA='TECNM ROQUE';
console.log(ESCUELA)

let string='cadenas de texto';
let booleans=true;
let booleans2=false;
let number=10;
let number2=20.5;
let bigInt= BigInt(10);
let arrays=[1,2,3];
let arrays2=[1,'hola']
let object={};

console.log(string,booleans,booleans2,number,number2,bigInt,arrays,arrays2,object)

let student={
    name:'MAURICIO',
    lastName:'FLORES',
    age:26,
    topics:['PROGRAMACION WEB','BASE DE DATOS',],

    assements:{
        webDevelopmern:10,
        Math:9,
    },
};
console.table(student['name']);


let obj1={
    propObj1:'values 1',
};
let obj2={
    propObj1:'values 2',
};
let obj3={
    prop3:'values 3',
    ...obj1,
    ...obj2,
};
console.table(obj3);
