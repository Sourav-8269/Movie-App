let data=JSON.parse(localStorage.getItem("details"));
let div=document.createElement("div")
let img=document.createElement("img");
img.src=data.image;
let year=document.createElement("h3");
year.innerText=`Release:- ${data.year}`;
let title=document.createElement("h3");
title.innerText=`Movie Name:- ${data.name}`; 
let container=document.getElementById("container")
container.append(div);
div.append(img,title,year)