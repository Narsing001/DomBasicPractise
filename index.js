// function demo(){
    
//     setTimeout(() => {
//         /*By Using Tag Name*/

//         // let el=document.getElementsByTagName('h1')[1];
//         //  el.innerHTML='Hey I am Narsing';
//         // console.log(el.innerText);
//         // el.style.color='red'; 

//         /*By Using Name*/
//         // for(let i=0;i<3;i++){
//         //     let el=document.getElementsByName('MyName')[i];
//         //     if(i==1){
              
//         //         el.style.background='red';
//         //         continue
//         //     }
//         //     el.innerHTML='Hello, I am Narsing';
//         //     el.style.background='blue';
        
//         // }

//     /*   By Using Class Name*/ 
//         // let el=document.getElementsByClassName('Hero')[1];
//         // el.innerHTML="Hello"

//     /*By using tag Name*/
//     //   let el=document.getElementById('MyId')
//     //   el.innerHTML="Hello Hi... bolke";
//     //   el.style.backgroundColor="red"

//     /* By Using Query Selecters */
//     //    const el=document.querySelectorAll(".Hero")[1]
//     //    const el2=document.querySelector(".Hero")
//     //     console.log(el.innerText);
//     //     el.style.color='red';
//     //     console.log(el2.innerText);
//     //     el2.style.color='blue'
    
  
//     },3000);



   
// }
  /* Form Access  */
//    function validateform(){
//      const el=document.forms["myForm"]["fname"].value
//      console.log(el)
//      if (el == "") {
//         alert("Name must be filled out");
//         return false;
//       }
//    } 

// demo();
function createElement(){
    const para=document.createElement('p');
    const node=document.createTextNode("New Text Node.");
    para.appendChild(node);  

    const ele=document.getElementById('div1');
    const child=document.getElementById('p1');
    ele.insertBefore(para,child);
}
setTimeout(()=>{
    createElement();
},4000)


