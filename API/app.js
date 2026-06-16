const loadBtn=document.getElementById("loadBtn");
const usersContainer=document.getElementById("usersContainer");
const loading=document.getElementById("loading");



loadBtn.addEventListener("click",getUsers);


async function getUsers(){
  loading.innerHTML="Loading...";
  const response=await fetch("https://686503325b5d8d03397f4dbe.mockapi.io/api/v1/users");
  const data=await response.json();
  console.log(data)
  
  data.forEach(user=>{
    usersContainer.innerHTML+=`
      <div class="card">
      <img src="${user.image}" alt="image here"/>
      <h1>${user.name}</h1>
      <p>${user.email}</p>
      <p>${user.number}</p>
      <p>

      </div>
    `;
  })
}