document.getElementById("btn").onclick=function(){

    console.log("hello");
}
function sayHello(){
        document.getElementById("output").innerHTML="<h1>Helo</h1>";
}

let count=0;
 function increment(){
    count++;
    document.getElementById("output").innerHTML=count;
 }
  function decrement(){
    count--;
    if (count<0){
        count=0;
    }
    document.getElementById("output").innerHTML=count;
 }