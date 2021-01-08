console.log("welcome to ES11");
//==        (content)
//===       (content and datatype)
console.log( 100 == "100" );            //true
console.log( 100 === "100" );           //false
console.log( 10 == "ten" );             //false
console.log( 10 === "ten" );            //false



console.log( 10 + "10" );                 //1010
console.log( 100 - "10" );                //90
console.log( "10" * 10 );                 //100
console.log( "10"/10 );                   //1
console.log( 100 + +"100");               //200

console.log( 10 + +"100" + 20 + +"200");    //330


console.log( 0.1+0.2 == 0.3 );             //false
console.log( 0.1+0.2 === 0.3 );            //false
console.log( 0.1+0.2 );                    //0.30000000000000004


console.log( undefined == undefined );      //true
console.log( undefined == null );           //true
console.log( undefined === null );          //false


