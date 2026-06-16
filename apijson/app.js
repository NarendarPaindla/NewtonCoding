const loadBtn =
document.getElementById("loadBtn");

const usersContainer =
document.getElementById("usersContainer");

const loading =
document.getElementById("loading");
loadBtn.addEventListener(
    "click",
    getUsers
);

async function getUsers(){

    try{

        loading.innerHTML="Loading...";

        const response =
        await fetch(
        "https://jsonplaceholder.typicode.com/users"
        );

        const data =
        await response.json();

        usersContainer.innerHTML="";

        data.forEach(user=>{

            usersContainer.innerHTML += `
            <div class="card">

                <h3>${user.name}</h3>

                <p>${user.email}</p>

                <p>${user.phone}</p>

            </div>
            `;

        });

    }
    catch(error){

        console.log(error);

    }
    finally{

        loading.innerHTML="";

    }

}