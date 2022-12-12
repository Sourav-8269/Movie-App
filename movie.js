let search=document.getElementById("search")
search.style.cursor="pointer"
search.addEventListener("click",function(){
  window.location.href="search.html"
})
document.getElementById("login").style.cursor="pointer"

function slideshow(){
  const arr=["https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9119/1329119-h-ef64fcf3d1f9",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/7976/1317976-h-e672d8d911fe",
"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/3064/1323064-h-dcaae091e676"];

let i=0;
let div=document.getElementById("slider");
let img=document.createElement("img");
img.src=arr[i];
div.append(img);
setInterval(function(){
  if(i==3){
    i=0;
  }
  img.src=arr[i];
  // console.log(i)
  i++;
  div.append(img)
},1000)

}
slideshow()
var movieData = [
    {
      image_url:
        "https://desiremovies.run/wp-content/uploads/2022/04/dewju38-4f9b881b-ef57-4efe-8a0f-4c18c14c0978-326x245.jpg",
      name: "K.G.F: Chapter 1",
      release: "2018",
      imdb: "8.2",
    },
    {
        image_url:"https://desiremovies.run/wp-content/uploads/2022/04/sKIA8Gk8Ai4E59OhBcGiFBBPtgR-678x381.jpg",
      name: "K.G.F: Chapter 2",
      release: "2022",
      imdb: "9",
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2022/05/RRR-326x245.jpg",
      name: "RRR",
      release: "2022",
      imdb: "9.6", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2021/03/Avengers-Endgame-2019-326x245.jpg",
      name: "Avengers: Endgame",
      release: "2019",
      imdb: "9.2", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2018/08/dcmbfzh-34479213-57eb-4750-bbb3-c6072b841636-326x245.jpg",
      name: "Avengers: Infinty War",
      release: "2018",
      imdb: "8.9", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2020/06/d8ljy8p-5a55f9b3-aef2-46cd-b75c-de2b50f0a709-326x245.jpg",
      name: "Avengers: Age of Ultron",
      release: "2016",
      imdb: "8", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2020/06/pngbarn-1-326x245.jpg",
      name: "Avengers",
      release: "2012",
      imdb: "7.8", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2022/05/new-326x245.jpg",
      name: "Stranger Things",
      release: "2022",
      imdb: "9.5", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2021/03/Avatar-2009-Movie-Poster-326x245.jpg",
      name: "Avatar",
      release: "2009",
      imdb: "9", 
    },
    {
        image_url:
        "https://desiremovies.run/wp-content/uploads/2020/06/pngguru.com_-4-326x245.jpg",
      name: "Dr. Strange",
      release: "2016",
      imdb: "6.8", 
    }
]
let container=document.querySelector("#container");
localStorage.setItem("movie",JSON.stringify(movieData));
function DisplayTable(data){
  let data_div=document.getElementById("container");
  data_div.innerHTML=null
data.forEach(function(elem){
    let div=document.createElement("div");
    // div.innerHTML=null
    let name=document.createElement("p");
    name.innerText="Name:- "+elem.name;
    let release=document.createElement("p");
    release.innerText="Year of Release:- "+elem.release;
    let imdb=document.createElement("p");
    imdb.innerText="IMDB:- "+elem.imdb;
    let image=document.createElement("img");
    image.setAttribute("src",elem.image_url);

    div.append(image,name,release,imdb);
    document.querySelector("#container").append(div);
})
}
// DisplayTable(movieData)

document.getElementById("sort-lh").addEventListener("click",low);

function low(){
  container.innerHTML=null;
  movieData.sort(function(a,b){
    console.log(a.imdb) 
    if(a.imdb > b.imdb) return 1;
    if(a.imdb < b.imdb) return -1;
    return 0;
  })
  DisplayTable(movieData); 
}

document.getElementById("sort-hl").addEventListener("click",high);

function high(){
  container.innerHTML=null;
  movieData.sort(function(a,b){
    console.log(a.imdb) 
    if(a.imdb > b.imdb) return -1;
    if(a.imdb < b.imdb) return 1;
    return 0;
  })
  DisplayTable(movieData); 
}


document.getElementById("login").addEventListener("click",login);
function login(){
  window.location.href="login-api.html";
}

let mypromise=new Promise(function(resolve,reject){
  setInterval(function(){
    let data=movieData
    if(data!==null){
      resolve(data)
      // console.log(resolve)
    }else{
      reject(error)
    }

  },2000)
})
async function main(){
  try{
      let response=await mypromise
      // console.log(response)
      DisplayTable(response)
  }
  catch(err){
      console.log("error")
  }
}
main()