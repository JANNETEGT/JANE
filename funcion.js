/*/// FUNCION SIN PARAMETROS
function nombreFuncion(){
    console.log('Ejecutando funcion "NombreFuncion"');
}
//FUNCION CON PARAMETROS
function nombreConParametros(nombre,apellido,edad){
    let text="Nombre: "+nombre+",apellido: "+apellido+",edad: "+edad;
    console.log(text);
}
//LLAMADA A LA FUNCION
nombreFuncion();
//LLAMADA A LA FUNCION CON PARAMETROS
nombreConParametros('MAURICIO','FLORES',26);
//CUADRADO DE UN NUMERO
function square(number){
    return number*number;
}
//CUBO DE UN NUMERO
function cube(number){
    return number*number*number;
}
console.log(square(8));
console.log(cube(8));



//CICLO FOR
for(let index=0; index<11; index++){
    let number=10*index;
    console.log(number);
}
//CICLO WHILE
let indexWhile=0;
while(indexWhile<11){
    let number=indexWhile*10;
    console.log(number);
    indexWhile++;
}
//CICLO DO-WHILE
letDoWhile=0;
do{
    let number=indexDoWhile*10;
    console.log(number);
    indexDoWhile++;
}while(indexDoWhile<10);
**/

//TABLA DE MULTIPLICACION CON EL CICLO FOR
console.log("CICLO FOR");
function TABLAMULTIPLICARFOR(mul,numf){
    for(let index=0; index<numf; index++){
        let number=mul*index;
        console.log(number);
    }
}
console.log(TABLAMULTIPLICARFOR(8,100));

//TABLA DE MULTIPLICAR CON EL CICLO WHILE
console.log("CICLO WHILE");
function TABLAMULTIPLICARWHILE(mul,numf){
let indexWhile=0;
    while(indexWhile<numf){
        let number=indexWhile*mul;
        console.log(number);
        indexWhile++;
    }
}
console.log(TABLAMULTIPLICARWHILE(8,100));

//TABLA DE MULTIPLICAR CON EL CICLO DO WHILE
console.log("CICLO DO WHILE");
function TABLAMULTIPLICARDOWHILE (mul,numf){
    let indexDoWhile=0;
        do{
            let number=indexDoWhile*mul;
            console.log(number);
            indexDoWhile++;
        }while(indexDoWhile<numf);
}
console.log(TABLAMULTIPLICARDOWHILE(7,5));