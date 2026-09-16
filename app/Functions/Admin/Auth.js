'use client'
import axios from 'axios'
//const AuthUrl="http://localhost:5000/api/Auth"
const AuthUrl="https://backend-url-pied.vercel.app"
function RegisterController(RegData){
const RegKeys=Object.keys(RegData);

let RegError={};

    RegKeys.forEach((e)=>{
        
        if (RegData[e].length < 5) {
            RegError[e]=  `The ${e} Is Required`;
        } else if(e=='terms' && RegData[e]==false){
            RegError[e]=`The ${e} Is Required`
        } 
        if(e=='password' && RegData[e].length < 7){
            RegError[e]=`The ${e} Must Be Greater Than 5 Characters`
        }
    })

     if (Object.keys(RegError).length !==0) {
            return {status:402,error:RegError}
        }else{
               

               async function fet(params) {
                  const resp=await axios.post(`${AuthUrl}/userReg`,{RegData},{withCredentials: true})
                    const result=resp.data
                    console.log(result)
                  if (resp.ok) {
                    
                    return result
                  }else{
                        return result
                  }
                  
                }
                const ft= fet()
                return ft

        }


}

export function LoginController(RegData) {
 const RegKeys=Object.keys(RegData);

let RegError={};

    RegKeys.forEach((e)=>{
        
        if (RegData[e].length < 5) {
            RegError[e]=  `The ${e} Is Required`;
        }
    })

     if (Object.keys(RegError).length !==0) {
            return {status:402,error:RegError}
        }else{
               

              async function fet(params) {
                  const resp=await axios.post(`${AuthUrl}/userLogin`,{RegData},{withCredentials: true})
                    const result=resp.data
                    console.log(result)
                  if (resp.ok) {
                    
                    return result
                  }else{
                        return result
                  }
                  
                }
                const ft= fet()
                return ft 

        }

   
}

export default RegisterController;