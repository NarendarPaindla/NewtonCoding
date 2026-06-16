// fetch("https://6a2f8ddcc9776ca6c0c5d910.mockapi.io/newton/v1/users")
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })

async function getUsers(){
    const response=await fetch("https://6a2f8ddcc9776ca6c0c5d910.mockapi.io/newton/v1/users");
    const data=response.json();
    console.log(data)
   
}

getUsers()
