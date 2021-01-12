//let is the keyword introduced in ES6
//let keyword used to define the variables

/*
    //var keyword breaks the scope rule
    //let keyword obeys the scope rule
    for(let i=0;i<5;i++){
        
    };
    console.log(i);      //let:ReferenceError: i is not defined        //var : 5
*/


/*
    //if block code effecting the global member called as global polluting issue
    //global polluting issue raised because of var keyword
    //we can overcome global polluting issue by using "let" keyword

    //global variable
    let data = 100;
    //block
    {
        //local variable
        let data = 200;  
    }

    console.log(data);      //var:200           //let:100
*/


/*
    let data = 100;
    let data = 200;     
    console.log(data);    //var:200     //let:SyntaxError: Identifier 'data' has already been declared
    //var keyword allows the duplicate variables
    //let keyword won't allows the duplicate variables
*/


/*
    //declartion
    //initilization
    //access
    console.log(data);        //var : undefined  (variable hoisting)
    let data = "Hello";       //let : ReferenceError: Cannot access 'data' before initialization    
    //var keyword raises the variable hoisting
    //let keyword breaks the variable hoisting
*/

/**************************************************************************************************************** *
                var                                                         let
    1) introduced before ES6                                           introduced in ES6

    2) variables are global variables                                   variables are local variables

    3) allows the duplicate variables                                   won't allows the duplicate variables

    4) variable hoisting raises                                         won't allow variable hoisting

    5) scope rule breaks here                                           scope rule obeys here

    6) global polluting issue raised here                               we can overcome global polluting issue
/**************************************************************************************************************** */


//var 123data = 100;    //An identifier or keyword cannot immediately follow a numeric literal.
//var 123 = 123;        //ariable declaration expected.
//var "123" = 123;      //Variable declaration expected.

var _123 = 123;         //correct
var $123 = 123;         //correct
var _123$456 = 123456;  //correct


/*
    let data = 100;
    {
        console.log(data);              //100
    }
*/


/*
    {
        let data1 = 200
    }
    console.log(data1);    //ReferenceError: data1 is not defined
*/


/*
    {
        console.log(data);                  //undefined
    }
    var data="Hello";
    console.log(data);                      //Hello
*/


//const
//const keyword introduved in ES6
//we can't modify const members

/*
    const data = 100;
    data = 200;         //TypeError: Assignment to constant variable.
*/


/*
    const data = [100,200,300,400,500];
    //total array assignment is not possible
    //data = [];
    //data = [10,20,30,40,50];
    //we can change independent element
    data[0] = 10;
    //we can add the elements/update the elements/remove the elements
    data.push(600);
    data[0] = 100;
    data.pop();
    console.log(data);    //[100,200,300,400,500]
*/



const obj = {
    "key1" : "Hello_1"
};
console.log(obj);           //{ key1: 'Hello_1' }

//obj={};             //in correct

obj.key2 = "Hello_2";
delete obj.key2;
console.log(obj);           //{ key1: 'Hello_1' }











































































































