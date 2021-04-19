

let name=null,email=null,gender=null,age=null,foodType=null,rate=null,visitOutside=null,visitHere=null;





const btn=document.querySelector(".button");
btn.addEventListener("click",(e)=>{
    e.preventDefault(); 
    name=document.querySelector('input[id="name"]').value;
    email=document.querySelector('input[id="email"]').value;
    if(document.querySelector('input[name="gender"]:checked')){
        gender=document.querySelector('input[name="gender"]:checked').value;
    }

    if(document.querySelector('input[name="age"]:checked')){
        age=document.querySelector('input[name="age"]:checked').value;
    }
    
    if(document.querySelector('input[name="food-type"]:checked')){
        foodType=document.querySelector('input[name="food-type"]:checked').value;
    }
    
    if(document.querySelector('input[name="rate"]:checked')){
        rate=document.querySelector('input[name="rate"]:checked').value;
    }
    
    if(document.querySelector('input[name="visit-outside"]:checked')){
        visitOutside=document.querySelector('input[name="visit-outside"]:checked').value;
    }
    
    if(document.querySelector('input[name="visit-here"]:checked')){
        visitHere=document.querySelector('input[name="visit-here"]:checked').value;
    }
    

    console.log(name," ",email," ",gender," ",age," ",foodType," ",rate," ",visitOutside," ",visitHere);
})

//cosnt formObj= new Form();