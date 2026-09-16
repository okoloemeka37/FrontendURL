'use client'
import axios from 'axios'
const Server_Url="https://backend-url-pied.vercel.app/";

async function getDash(){
  try {
    const resp= await axios.get(`${Server_Url}/api/Admin/Dashboard`,{withCredentials:true});
    console.log(resp.data)
  return {status:200,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN FETCHING DATA"}
  }

}


// link details

 export async function linkDetails(id){


  try {
    const resp= await axios.post(`${Server_Url}/api/Admin/linkDetails`,{id:id},{withCredentials:true});
    console.log(resp.data)
  return {status:200,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN FETCHING DATA"}
  } 
}


///Edit Link Destination


 export async function EditLinkDestination(body){


  try {
    const resp= await axios.post(`${Server_Url}/api/Admin/EditLinkDestination`,{body:body},{withCredentials:true});
    console.log(resp.data)
  return {status:201,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN UPDATING DATA"}
  } 
}



export async function getLink(){
  try {
    const resp= await axios.get(`${Server_Url}/api/Admin/Link`,{withCredentials:true});
    console.log(resp.data)
  return {status:200,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN FETCHING DATA"}
  }

}
export default getDash;