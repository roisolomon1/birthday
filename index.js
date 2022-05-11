let paragraph = document.getElementById("firstparagraph")
let header = document.getElementById("header")
let title = document.getElementById("title")

let the_paragraph
let the_header
let the_title 



function myfunction(){
   let x
   let form = document.getElementById("form1")
   let text = ""
   let ordered = 0
   let quantity = document.getElementById("quantity")
  

   for( x=0; x<form.length; x+=1){
      text+=form.elements[x].value + " "
      window.localStorage.append = text
   }
   ordered+=Number(quantity.value)
   
   
   console.log(window.localStorage)
   console.log(ordered)  
       

}
