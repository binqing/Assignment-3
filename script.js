
//Select the section with an id of container without using querySelector.
document.getElementById("container");

//2) Select the section with an id of container using querySelector.
document.querySelector("#container");

//3) Select all of the list items with a class of "second".
document.querySelectorAll(".second");

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
let x=document.querySelector("#container > ol > .third");
console.log(x);

//5) Give the section with an id of container the text "Hello!".
var element= document.querySelector("#container").innerText ("Hello!");

//6) Add the class main to the div with a class of footer.
var ele = document.getElementsByClassName("footer");
ele.classname = "main";
a = document.querySelectorAll(".footer");
a.append(ele);

//7) Remove the class main on the div with a class of footer.
var ele = document.getElementsByClassName("footer");
ele.classList.remove("main");

//8) Create a new li element.
var n =document.createElement("li");

//9) Give the li the text "four".
var text = document.createTextNode("four");
n.appendChild(text);

//10) Append the li to the ul element.
document.querySelector("ul").appendChild(n);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
//document.getElementById("").style.color="green";
var y = document.querySelectorAll("ol li");
for( let i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "green";
}

//13) Remove the div with a class of footer.
var myobj= document.getElementsByClassName ("footer");
myobj.remove();



