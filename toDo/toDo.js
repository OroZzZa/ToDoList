const inbox= document.getElementById("input-box");
const listContainer =document.getElementById("listContainer");

function addTask(){
          if(inbox.value ===''){
                    alert("you must write something");

          }else{
                    let li = document.createElement("li");
                    li.innerHTML= inbox.value;
                    listContainer.appendChild(li);
                    let span = document.createElement("span");
                    span.innerHTML="\u00d7";
                    li.appendChild(span); 
          }
          
          inbox.value= "";


          
}