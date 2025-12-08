function loadUsers(){
    fetch("https://randomuser.me/api/?results=6")
.then(res => res.json())
.then(data => {
    document.querySelector(".cards-container").innerHTML = "";
    let container = document.querySelector(".cards-container");  
      
    data.results.forEach(user => {

        let card = document.createElement("div");
        card.classList.add("card");

        let profilePhoto = document.createElement("div");
        profilePhoto.classList.add("profile-photo");

        let img = document.createElement("img");
        img.src = user.picture.large;
        img.alt = user.name.first;

        profilePhoto.appendChild(img);

        let userInfo = document.createElement("div");
        userInfo.classList.add("user-info");

        let educationList = [
    "B.Tech 2020",
    "M.Tech 2022",
    "B.Sc Computer Science",
    "MCA 2023",
    "BCA 2021"
];

let positionList = [
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Product Manager",
    "Full Stack Developer",
    "Web Designer",
    "Creative Developer"
];
 let randomEducation = educationList[Math.floor(Math.random() * educationList.length)];
 let randomPosition = positionList[Math.floor(Math.random() * positionList.length)];



        userInfo.innerHTML = `
            <h2>Name: ${user.name.first} ${user.name.last}</h2>
            <h2>Education: ${randomEducation}</h2>
            <h2>Position: ${randomPosition}</h2>
            <h2>Place: ${user.location.country}</h2>
            <h2>Email: ${user.email}</h2>
        `;

        card.appendChild(profilePhoto);
        card.appendChild(userInfo);

        container.appendChild(card);
    });
});

}
loadUsers();

document.querySelector("#refreshBtn")
.addEventListener("click", function(){
    loadUsers();
});

