"use client"
import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'
import { usePathname, useRouter } from "next/navigation";

const AuthContext=createContext({
    isAuthenticated:false,
   login:(data)=>{},
    logout:()=>{}, 
    Server_Url:'https://backend-url-pied.vercel.app',
    userCred: {id:'',name: '', email: ''}

});
export const Authprovider=({ children })=>{

  const Pathname=usePathname();

  const router=useRouter(); 
 const [userCred, setuserCred] = useState({name:'',email:''})

// const [Server_Url]=useState("http://localhost:5000/api/")
 const [Server_Url]=useState("https://backend-url-pied.vercel.app")
    const [isAuthenticated, setisAuthenticated] = useState(false);
 
     let isPublicPage; //= pathname === "/";

  if(Pathname === "/"){
    isPublicPage=true
  }


 
async function checkAuth() {
  try {
    const resp= await axios.get(`${Server_Url}/api/auth/checkAuth`,{withCredentials:true});
   setuserCred(resp.data.user)
  console.log(resp.data.user)

   if (Pathname === "/Admin/Login" || Pathname === "/Admin/Register") {
        router.replace("/Dashboard");
      }


  } catch (error) {
    if (error.status===401) {

      if (Pathname=="/Admin/Register") {
        router.push("/Admin/Register")
      }else if(Pathname=="/"){
         
      }
      else{
      router.push("/Admin/Login")
    }
    }
  }
}

  useEffect(() => {
    /* // Skip auth check only on the public  page
    if (isPublicPage) return; */
    (async () => {
   await checkAuth()
 })()
  }, []); 
  

async function logout() {
    try {
      const resp =await axios.get(`${Server_Url}/api/auth/logout`, {withCredentials:true});
      console.log(resp.data)
      setisAuthenticated(false);
      setuserCred({name:'',email:''})
       router.push("/Admin/Login")
    } catch (error) {
      console.log(error)
    }
}

function login(data) {
    setisAuthenticated(true);
    setuserCred(data.user);
}



 return (<AuthContext.Provider value={{isAuthenticated,userCred,logout,login,Server_Url}}>{children}</AuthContext.Provider>)
}
 export  const useAuth=()=>useContext(AuthContext);