async function movie(){
    try{
        let query=document.querySelector("#query").value;
        // console.log(query);
        let res=await fetch(`http://www.omdbapi.com/?apikey=38d2ac02&s=${query}`)
        let data=await res.json();
        console.log(data)
        let actual=data.Search

        DisplayTable(actual)

    }catch(err){
        console.log(err);

    }
    function constructor(name,image,year){
        this.name=name;
        this.image=image;
        this.year=year;
    }
    // let arr=JSON.parse(localStorage.getItem("details"))||[];
    function DisplayTable(data){
        if(data==undefined){
            return
        }
        document.querySelector("#container").innerHTML=null;
        data.forEach(function(elem){
            let div=document.createElement("div");
            
            let name=document.createElement("p");
            name.innerText="Name:- "+elem.Title;
            let release=document.createElement("p");
            release.innerText="Year of Release:- "+elem.Year;
           
            let image=document.createElement("img");
            image.setAttribute("src",elem.Poster);

            let button=document.createElement("button");
            button.innerText="Get Details";
            button.addEventListener("click",function(){
                let obj=new constructor(elem.Title,elem.Poster,elem.Year);
                // arr.push(obj);
                localStorage.setItem("details",JSON.stringify(obj));
                window.location.href="moviedetails.html"
                console.log(arr)
            })
        
            div.append(image,name,release,button);
            document.querySelector("#container").append(div);
        })
    
}
}

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id);

    }


    id=setTimeout(function(){
        func(movie);
    },delay)
}

// movie()
// http://www.omdbapi.com/?i=tt3896198&apikey=a5495cb5