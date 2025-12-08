//fetch api = javascript ka inbuilt function hai ye .fetch url par jata hai aur data lekar aata hai 
//fatch promise based hai to do tarike se likh sakte hai .then and .catch
//api - ek url hota hai jaha par jane se hume kuch na kuch data milta hai

fetch("https://randomuser.me/api/?results=5")
.then(function(rawdata){
    return rawdata.json();

    
})
.then(function(data){
    console.log(data.results)
});


