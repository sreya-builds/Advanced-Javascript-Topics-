console.log('hello');
console.log('hi,kaise ho');
setTimeout(()=>{
    console.log('weather kaise hai');
    
},2000);
console.log('khana khaye aap');

//promises mai humesha do state hote hai resolve and reject .ye humesha kissi ek state mai hi ja sakte hai 
//agar promise resolve hota hai to .then use hota hai 
//agar promise reject hota hai to .catch use hota hai
let pr = new Promise(function(res,rej){
  setTimeout(()=>{
   let rn = Math.floor(Math.random()*50)
   if(rn > 20)
    res("resolved with" + rn)
else rej("rejected with"+rn)
  },1000)  
})
.then(function(val){
   console.log(val);
   
})
.catch(function(val){
    console.log(val);
    
})


//async await
// try - agar humara resolve chala to jo bhi value aayegi vo next line mai print ho jayega
//catch - agar humara reject chala to jo bhi value aayegi vo err mai chalega phir print hoga
 
let pro = new Promise(function(start,pause){
  setTimeout(()=>{
    let rm = Math.floor(Math.random()*100)
    if(rm>100)
    start("resolved by"+rm)
  else pause("reject by"+rm)
  },2000)
})
async function Khanakhalo(){
   try{
    let val =  await pro;
    console.log(val);
    
   } 
   catch(err){
     console.log(err);
     
   }
 }
 Khanakhalo();