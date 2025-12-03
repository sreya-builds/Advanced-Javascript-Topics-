//question 1
let object ={
    name:'shreya',
    func: function(){
        console.log(this.name);
        
    }
    
}
object.func();

//question2 
function showAge(){
    console.log(this.name,this.age);
    
}
let obj1 = {
    name:'rahul',
    age:30,
}
let obj2={
    name:'shikha',
    age:20,
}
showAge.call(obj1);
showAge.call(obj2);

//question3
//part1 
function showDetails(){
   console.log(this.name,this.city);
   
}
let object1 = {
    name:"Aman",
    city:"Delhi",
}
let object2 ={
    name:"Kavya",
    city:"Mumbai",
}
showDetails.call(object1);
showDetails.call(object2);
//part2
function showDetails(a,b,c){
   console.log(this.name,this.city,a,b,c);
   
}
let object4 = {
    name:"Aman",
    city:"Delhi",
}
let object3 ={
    name:"Kavya",
    city:"Mumbai",
}
showDetails.apply(object4,[1,2,3]);
showDetails.apply(object3,[4,5,6]);


//question4
let obt ={
    name:'Palak',
    age:20,
    city:"Shimla",
    Passion:"Creative Dev",
    funcc : ()=>{
        console.log(this.name,this.age,this.city,this.Passion);
        
    }
}
obt.funcc();
//undefined aaya hai kyuki arrow function kabhi bhi apna this create nhi karta hai 

//question5
//global this
  console.log(this);

  //object this 
  let obc = {
    product:"Slippers",
    price:230,
    company:"khadim",
    funct:function(){
        console.log(this.product,this.price,this.company);
        
    }

  }
  obc.funct();
  