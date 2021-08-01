//write a code to demo dom in javascript
/*
DOM---DOCUMENT OBJECT MODEL 
Each html document conatin hirarchical structure

  document    
     |
    html
     |
head----body
 |       |
---     ----
*******************************************************************************************************************************
*/

//1.dir
console.dir(document);//dir is a function which display interactive list of the properties of the specified javascript object

//2. we can acess those properties from document
//A . using console
console.log(document.URL);
console.log(document.title);
console.log(document.domain);
console.log(document.all[31]);

//B. identifier methods
  
  //a. using id
    const idvar1 =document.getElementById('h1id1');//id is always unique
    console.log(idvar1);

  //b.using class
  const classvar1 =document.getElementsByClassName('list-group-item');//elements
  console.log(classvar1);

  //c.using tagname
  const tagvar1 =document.getElementsByTagName('li');//elements
  console.log(tagvar1);

//C. queryselector methods

// a. using id 
const idvar2 =document.querySelector('#items');//it display its child
    console.log(idvar2);//it point first tag only which conatin id items

//b.using class
 const classvar2 =document.querySelector('.list-group-item');
console.log(classvar2);    //it point first li only not all li which contain class = list-group-item

//c.using tagname
const tagvar2 =document.querySelector('li');
console.log(tagvar2);  //it point first li only not all li 


//D. queryselctorall methods

// a. using id 
const idvar3 =document.querySelectorAll('#items');//it is not display its child
console.log(idvar3);

//b.using class
 const classvar3 =document.querySelectorAll('.list-group-item');
console.log(classvar3);    

//c.using tagname
const tagvar3 =document.querySelectorAll('li');
console.log(tagvar3);  

// 3. How we modify and update properties of document 

//A. using textContent
 const updatevar1 =document.getElementById('h1id1');//id is always unique
 updatevar1.textContent=" i am update using textContent";

//B using innerHTML
const updatevar2 =document.getElementById('h1id1');//id is always unique
updatevar2.innerHTML='<h3>i am update using innerHTML 1ST WAY</h3>'//IT DISPLAY IN DIFFERENT WAY MEANS INSIDE ANY TAG LIKE INNER HTML 

updatevar1.innerHTML='<h3>i am update using innerHTML 2ND WAY</h3>'//IT DISPLAY IN DIFFERENT WAY MEANS INSIDE ANY TAG LIKE INNER HTML


//4. chnage css /style from document
 updatevar1.style.backgroundColor="red";


//
//5.DOM events
//addEventListenetr-----element.addEventListener(nameOfTheEvent, nameOfTheFunctionality)
// A. click
//1st way

function vaishnavi(){
    alert("button was click");
 }

const button=document.querySelector('#button');
button.addEventListener('click',vaishnavi);
button.addEventListener('dblclick',vaishnavi);//?????????

//2nd way
button.addEventListener('click',()=>{
    alert("button was click");
});

//************************************************************************************************* */


//input functions 

const text=document.querySelector('.form-control1');
console.log(text);

//focus
text.addEventListener('focus',()=>{
    console.log("focus");
});

//blur
text.addEventListener('blur',()=>{
    console.log("blur");
});

//cut
text.addEventListener('cut',()=>{
    console.log("cut");
});
//copy
text.addEventListener('copy',()=>{
    console.log("copy");
});
//paste
text.addEventListener('paste',()=>{
    console.log("paste");
});

//keyup
text.addEventListener('keyup',()=>{
    console.log("key is released");
});
// //keydown
 text.addEventListener('keydown',()=>{
    console.log("key is pressed");
});
//****************************************************************************
//Event emitters|| event parameter
//event parameter------event parameter is a parameter to a function which is listening to an event 
// using keyup event
const varinput1 =document.getElementById('input1');
varinput1.addEventListener('keyup',(parameter)=>{// event parameter
 console.log(event.target.value);//input value is display
})
//using click event
const btn=document.getElementById('button');//problem with this --when you submit the form any data using button you are not able to apply to event parameter to those element which is use to submit your data
  btn.addEventListener('click',(e)=>{ 
    e.preventDefault();//prevents the default nature of the submit button to submit the form
  console.log(e);
 })
 //****************************************************************************
 //fun activity
 const varbox =document.getElementById('div1');
 varbox.addEventListener('mouseenter',(ei1)=>{
     console.log(ei1);
    varbox.style.backgroundColor = `rgb(${ei1.offsetX}, ${ei1.offsetY}, 100)`//change color
    // varbox.style.backgroundColor="red";
 })
 varbox.addEventListener('mouseleave',(ei2)=>{
    console.log(ei2);
    varbox.style.backgroundColor = `rgb(${ei2.offsetX}, ${ei2.offsetY}, 150)`//change color
 })

 //*****************************************************************************
 
 //DOM triversal--A method to acess the html element based on the relationship
 //it able to acess parent ,child,siblings
 

 //parent nodes
 const list=document.getElementById('items');
 console.log(list.parentElement);
 //DOM chaining
 console.log(list.parentElement.parentElement);
 //modify
list.parentElement.parentElement.style.backgroundColor="red";

 //children nodes

 console.log(list.children);//also you can use children.children for which element contain childrens
 console.log(list.children[2]);
//firstchild
console.log(list.firstChild);//give indentation beacuse  first child present in new line so we use firstElementChild
console.log(list.firstElementChild);
//lastchild
console.log(list.lastChild);//give indentation beacuse last child present in new line so we use lastElementChild
console.log(list.lastElementChild);

//siblings
 console.log(list.previousSibling);
 console.log(list.previousElementSibling);
 console.log(list.nextSibling);
 console.log(list.nextElementSibling);

 //************************************************************************************* 
 //creating HTML elements
 const newelement=document.createElement("myelement");
//also provide attribute
 newelement.id="myid";
 newelement.className="myclass";
 console.log( newelement);//create new element

 //add your element as a child of other element
 newelement.textContent="new item"
 newelement.style.color="white"
 const list2=document.getElementById('items');
 list2.appendChild( newelement);

 //Adding items through forms
 //1ST WAY
 const inputvar=document.getElementById('input2');
inputvar.addEventListener('keyup',(P)=>{
const getdata=P.target.value;
  newelement.textContent=getdata;
  })

//2ND WAY
const mybtn=document.getElementById('button');
mybtn.addEventListener('click',()=>{
    list2.appendChild( newelement);
})

//******************************************************************************
 //FUN ACTIVITY
const btnvar2=document.getElementById('button');

btnvar2.addEventListener('click',()=>{
    list.parentElement.parentElement.style.backgroundColor="pink";
});





 






  



   
 



















