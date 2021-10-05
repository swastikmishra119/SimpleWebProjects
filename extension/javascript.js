let myarray=[]

const inputtext=document.getElementById("input-text")
const inputbtn= document.getElementById("input-button")
let showlist=document.getElementById("list")

inputbtn.addEventListener("click", function() {
   myarray.push(inputtext.value)
   console.log(myarray)
   inputtext.value=""
   renderarray()
})


function renderarray(){
    let listitems=""
    for(let i=0; i<myarray.length; i++) 
   {
     listitems += `
     <li>
         <a target='_blank' href='${myarray[i]}'>  
         ${myarray[i]}
         </a>
     </li>
     `
   }
   
   showlist.innerHTML=listitems
}