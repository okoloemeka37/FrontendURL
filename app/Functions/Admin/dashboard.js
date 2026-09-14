'use client'
import axios from 'axios'

async function getDash(){
  try {
    const resp= await axios.get("http://localhost:5000/api/Admin/Dashboard",{withCredentials:true});
    console.log(resp.data)
  return {status:200,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN FETCHING DATA"}
  }

}


// link details

 export async function linkDetails(id){


  try {
    const resp= await axios.post("http://localhost:5000/api/Admin/linkDetails",{id:id},{withCredentials:true});
    console.log(resp.data)
  return {status:200,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN FETCHING DATA"}
  } 
}


///Edit Link Destination


 export async function EditLinkDestination(body){


  try {
    const resp= await axios.post("http://localhost:5000/api/Admin/EditLinkDestination",{body:body},{withCredentials:true});
    console.log(resp.data)
  return {status:201,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN UPDATING DATA"}
  } 
}



export async function getLink(){
  try {
    const resp= await axios.get("http://localhost:5000/api/Admin/Link",{withCredentials:true});
    console.log(resp.data)
  return {status:200,data:resp.data.data}
  } catch (error) {
    return {status:500,message:"SOMETHING WENT WRONG WHEN FETCHING DATA"}
  }

}
export default getDash;