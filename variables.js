/*
    variables
    =========
        - variables are used to store the data.
                Ex.
                        string
                        number
                        boolean
                        arrays
                        objects
        - we will declare variables in 3 ways.
                    1) "var"
                    2) "let"
                    3) "const"

        - "let" and "const" keywords introduced in "ES6".

        - variables should contain A-Z, a-z, 0-9 , $ and _

        - variables should not start with "digits".

    Syntax
    ======
        var/let/ const variablename = value;
    Ex.
        var data = "welcome to javascript"; 
        console.log(data); 
*/

//string
//colletion of characters called as string
//"" ,  ''  , ``(baktick)
//``(baktick) operator introduved in "ES6"
//``(baktick) operator technically called as "template literal"
//``(baktick) operator used to define the "paragraphs"
var sub = "ReactJS";
var wish = `Welcome to ${sub}`;
console.log(wish);                      //Welcome to ReactJS

var tbl_name = "employees";
var sal = 50000;
var sql_query = `select * from ${tbl_name} where e_sal>${sal}`;
console.log(sql_query);                 //select * from employees where e_sal>50000


var u_name = "admin";
var u_pwd = "admin";
var query = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;
console.log(query);                 //select * from employees where uname='admin' and upwd='admin'


//number
//@decimal      @double     @hexadecimal        @octal      @binary
//hexadecimal number will prefix with "0x"
//octal number will prefix with "0o"
//binary number will prefix with "0b"
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x1234ABC;
var octal = 0o123;
var binary = 0b1010;
console.log( decimal,
             double,
             hexadecimal,
             octal,
             binary );      //100 100.12345 19090108 83 10


//boolean datatype
//"true" / "false"
var flag = true;
console.log(flag);          //true


//array
//collection of indexed elements called as array
//[]
//access the elements with the help of "indexes"
//index starts with "0"
var arr1 = [10,20,30,40,50];
console.log( arr1[0],
             arr1[1],
             arr1[2],
             arr1[3],
             arr1[4] );                 //10 20 30 40 50
console.log( arr1[5] );                 //undefined
console.log( arr1[-1] );                //undefined


//for()   while()  do..while()          //<ES6
//forEach(), for..in(), for...of()      //ES6
var f_end = [`Angular`,`ReactJS`,`VueJS`];
var b_end = [`Spring Boot`,`NodeJS`,`DJango`];
f_end.forEach( (element,index)=>{
    console.log( element, b_end[index] );
} );     //Angular Spring Boot
         //ReactJS NodeJS
         //VueJS DJango



var frameworks = [`ASP .Net`,`Hibernate`,`Spring`,`JPA`];
frameworks.forEach( (element,index)=>{
    console.log(element,index);
} );



//json
//java script object notation
//transfer the data over the network
//Objects --- {}
//Arrays  --- []
//data    --- key & value pairs
//            key & value separated by using ":"
//            key & value pairs separated by using ","
var obj = {
    key1 : "Hello_1",
    key2 : "Hello_2",
    key3 : "Hello_3"
};
console.log( obj.key1,
             obj.key2,
             obj.key3 );
//for....in loop    //ES6
for(var k in obj){
    console.log( obj[k] );
}

//bigint
//range -2^63 to 2^63-1
//we will represent bigint number with suffix "n"
//8bytes
var my_bigint = 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789n;
console.log(my_bigint);

//Symbol
//Symbol data type introduced in ES6
//Symbol datatype, used to provide the secuirity to the data
var my_data = Symbol(100);
var my_data1 = Symbol("Hello");
console.log( my_data, my_data1 );     //Symbol(100) Symbol(Hello)







































































































