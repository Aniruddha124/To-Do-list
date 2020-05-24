//Creating the to do list element

function addListItems() {
var list = document.createElement("li");
var listText = document.getElementById("textbox1").value;
var text=document.createTextNode(listText);
list.className="toeditlistitems";
list.appendChild(text);

if(listText === ""){
    alert("The TO-DO item cannot be empty!");
}
else{
    document.getElementById("listItems").appendChild(list); 
}
document.getElementById("textbox1").value="";



// Crating the close button
var theSpan=document.createElement("span");
var txt=document.createTextNode("x");
theSpan.className="close";
theSpan.appendChild(txt);
list.appendChild(theSpan);

//Removing the to do item on clicking the x element
var closebtn= document.getElementsByClassName("close");
for(i=0;i<closebtn.length;i++){
    closebtn[i].onclick=function(){
       var theDiv=this.parentElement;
       theDiv.style.display="none";
    }
}

// to mark the task as done change the bg color
function crossOut() {
    list.classList.toggle("done");
}

list.addEventListener("click",crossOut);

}

