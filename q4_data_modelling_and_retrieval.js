// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here

const fruitList = [
    {name:'apple',color:'red',pricePerKg:100},
    {name:'kiwi',color:'brown',pricePerKg:600},
    {name:'orange',color:'orange',pricePerKg:150},
    {name:'mango',color:'yellow',pricePerKg:70},
    {name:'papaya',color:'yellow',pricePerKg:40},
]

function fruitListConvertor(arr){
    let fruitList = {};
    for(let fruit of arr){
        fruitList[fruit.name]= {color:fruit.color,pricePerKg:fruit.pricePerKg};
    }
    return fruitList;
}

console.log(fruitListConvertor(fruitList));