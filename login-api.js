function getinputvalue(id){
    let value=document.getElementById(id).value
    return value;
}
function User(n,e,p,u,m,d){
    this.name=n;
    this.email=e;
    this.password=p
    this.username=u
    this.mobile=m
    this.description=d
}

async function Register(){
    const name=getinputvalue("name");
    const email=getinputvalue("email");
    const password=getinputvalue("password");
    const username=getinputvalue("username");
    const mobile=getinputvalue("mobile");
    const description=getinputvalue("description");

    let user_data=new User(name,email,password,username,mobile,description)
    console.log(user_data)
    const register_url=`https://masai-api-mocker.herokuapp.com/auth/register`

    let res=await fetch(register_url,{
        method:"POST",
        body:JSON.stringify(user_data),
        headers:{
            'Content-Type':'application/json',
        },

    });
    let data=await res.json();
    console.log(data)
}

async function Login(){
    let login_data={
        username:document.getElementById("login-username").value,
        password:document.getElementById("login-password").value,
    };
    username=login_data.username;


    const login_url=`https://masai-api-mocker.herokuapp.com/auth/login`;
    let res=await fetch(login_url,{
        method:'POST',
        body:JSON.stringify(login_data),
        headers:{
            'Content-Type':'application/json',
        },
       })
       let data=await res.json();
       let token=data.token;
       console.log(data)
       if(data.token!=null){
        window.location.href="index.html";
       }
    //    console.log(token)
       getdata(login_data.username,token)
}

async function getdata(username,token){
    
    const data_url=`https://masai-api-mocker.herokuapp.com/user/${username}`
    let res=await fetch(data_url,{
        headers:{
            'Content-Type':'application/json',
            Authorization: `Bearer ${token}`,

        },
    })
    let data=await res.json();
    console.log(data)
}
// let username=login_data.username;
// let token=data.token;
