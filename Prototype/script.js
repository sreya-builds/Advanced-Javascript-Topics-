//constructor
//constructor automatic chale wala function hai 
//prototypes hote hai shared memory
class Bottle{
    constructor(){
        this.color = "blue";
        this.material = "steel";
        this.price  = "milton";
    }
    fill(){}
    drink(){}

}
newSteelBottle = new Bottle();

//prototypes
//constructor ke andar jo jo banaya ko object ka khud ka hoga.but prototype mai jate hi vo share ho jata hai...
class Sketch{
    constructor(){
        this.character = "sinchan";
        this.color = "red and yellow";
    }
    
}
Sketch.prototype.speak = function(){}
Sketch.prototype.walk = function(){}

let sketch1 = new Sketch();

//this 
//this ek special keyword hota hai kyuki this ke value badal jate hai 
console.log(this);

//function mai bhi window
function abcd(){
    console.log(this);
}
abcd();

//object ke sath this ke value badal jayegi
let obj = {
    name:'harsh',
    fun:function(){
        console.log(this);
    }
}
obj.fun();

//globa and function mai this ki value hote hai window
//es5 function inside object->object
  let object = {
    name:'shreya',
    fnu:function(){
        console.log(this.name);
        
    }
  }
  object.fnu();
  
//es6 function inside object -> window
 let ocb = {
    funcc:()=>{
        console.log(this);
        
    }
 }
 ocb.funcc();
//es5 function inside es5 function inside  object->window
  let obe = {
    funcc:function(){
        function cdef(){
          console.log(this);
          
        }
        cdef();
    }
  }
  obe.funcc();
//es6 function inside es5 function inside object->object

let obt = {
    name : 'ram',
    funccc:function(){
      function stuv(){
        console.log(this.name);
        
      }
      stuv.call(this);
    }
}
obt.funccc();

//call,apply,bind
//ek function mai this ke value window hote hai,agr aap chahte ho ki 
//  vo value window na ho par koi aur object ho tab hum use kar sakte hai 
//  call,apply and bind ka 
 let ob = {
    name:'Tilak',
 }
    function xyz(){
        console.log(this);
    }
    xyz.call(ob);
 
 let o = {
    name:'Krishna',
 }
    function efg(a,d,c){
        console.log(this,a,d,c);
    }
    efg.apply(o,[1,2,3]);

let b = {
    name:'Radha',
 }
    function ijk(a,d,c){
        console.log(this,a,d,c);
    }
   let newfunction =  ijk.bind(b,1,2,3);

   newfunction();