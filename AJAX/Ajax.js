//we use AJAX to integrating API in our application

//to make request to a server you need XMLHTTPREQUEST(XHR)

//STEP1 --create the object of XHR

const xhr=new XMLHttpRequest();
console.log(xhr.readyState);
const url="https://api.github.com/users";

//STEP 2--open the portal of communication between clind and server
//xhr.open(HttpMethod,urlOfTheApi);
  xhr.open('GET',url);
  console.log(xhr.readyState);

  //STEP3 --keep the track of the state change
  xhr.onreadystatechange=()=>{
    console.log(xhr.readyState);
      //STEP4--check if ready state=4 and status=200
      if(xhr.readyState==4 && xhr.status==200){
        const response=JSON.parse(xhr.responseText);
        console.log(response);
        //************************************ 
         const bt=document.getElementById('btn1');
         bt.addEventListener('click',()=>{

          for(i=0;i<=response.length;i++){
          
            const image=document.createElement('img');
            image.src=response[i].avatar_url;
            console.log(image);//image

            const para = document.createElement('p')
            para.className = 'lead'
            para.innerHTML=`<b>${response[i].login}</b>`
            para.style.textAlign = 'center'
            console.log(para);//para

            
            const box = document.getElementById('main')
            box.appendChild(image)
            box.appendChild(para)
            box.appendChild(hr)
            

             }
      })

        
      }
  }

  //send request

  xhr.send();


/*
 for(i=0;i<=response.length;i++){
          
            const image=document.createElement('img');
            image.src=response[i].avatar_url;
            console.log(image);//image

            const para = document.createElement('p')
            para.className = 'lead'
            para.innerHTML=`<b>${response[i].login}</b>`
            para.style.textAlign = 'center'
            console.log(para);//para

            const div1=document.getElementById('main'); 
            div1.appendChild(image);
            div1.appendChild(para);
        }*/
