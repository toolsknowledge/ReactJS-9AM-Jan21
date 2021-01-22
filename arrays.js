//array
//collection of indexed elements called as array
//[]
//we can access array elements with the help of indexes.


/*
    //map()
    //map() function used to manipulate the all elements of array
    //ES6

    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element * 10;
        })
    );      //[ 10, 20, 30, 40, 50 ]

    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return "$"+element;
        })
    );     //[ '$100', '$200', '$300', '$400', '$500' ]
*/




/*
    //filter()
    //used to apply the conditions to array
    //ES6
    console.log(
        [10000,20000,30000,40000,50000].filter((element,index)=>    {
            return element<=10000;
        })
    );     //[ 10000 ]
    console.log(
        [1,2,3,4,5,6,7,8,9,10].map((element,index)=>{
            return element*10;
        }).filter((element,index)=>{
            return element>50;
        })
    );       //[ 60, 70, 80, 90, 100 ]
*/

/*
    //reduce()
    //used to find the sum of array elements then we will use reduce()
    console.log(
        [1,2,3,4,5].reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );     //15

    console.log(
        [1,2,3,4,5,6,7,8,9,10].map((element,index)=>{
            return element*10;
        }).filter((element,index)=>{
            return element<=50;
        }).reduce((firstElement,nextElement)=>{
            return firstElement+nextElement;
        })
    );    //150
*/

/*
    //length
    let arr = [10,20,30,40,50,60,70,80,90,100];
    console.log(arr.length);                //10
    console.log(arr[0], arr[4], arr[9]);    //10 50 100
    console.log(arr[-1],arr[10]);                   //undefined undefined 
    arr.length=5;
    console.log(arr[4],arr[0],arr[-1],arr[5]);      //50 10 undefined undefined
*/


/*
    //delete
    //delete the elements from array

    let arr = [10,20,30,40,50];
    console.log(arr.length);    //5

    delete arr[0];
    console.log(arr.length);   //5
    console.log(arr);
*/

//push()
//pop()

//unshift()
//shift()

let arr = [20,30,40];
console.log(arr);               //[ 20, 30, 40 ]
arr.push(50);
console.log(arr);               //[ 20, 30, 40, 50 ]
arr.unshift(10);
console.log(arr);               //[ 10, 20, 30, 40, 50 ]
arr.pop();
console.log(arr);               //[ 10, 20, 30, 40 ]
arr.shift();
console.log(arr);               //[ 20, 30, 40 ]



















































































































