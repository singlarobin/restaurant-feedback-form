

let name=null,email=null,gender=null,age=null,foodType=null,rate=null,visitOutside=null,visitHere=null;


const btn=document.querySelector(".button");
btn.addEventListener("click",(e)=>{
    e.preventDefault(); 
    name=document.querySelector('input[id="name"]').value;
    email=document.querySelector('input[id="email"]').value;
    if(document.querySelector('input[name="gender"]:checked')){
        gender=document.querySelector('input[name="gender"]:checked').value;
    }


    let ageElement=document.getElementById("age")
    age=ageElement.options[ageElement.selectedIndex].text;
    
    if(document.querySelector('input[name="food-type"]:checked')){
        foodType=document.querySelector('input[name="food-type"]:checked').value;
    }
    
    rate=document.getElementById("rateLabel").innerHTML;

    let visitOutsideElement=document.getElementById("visit-outside");
    visitOutside=visitOutsideElement.options[visitOutsideElement.selectedIndex].text;
    

    let visitHereElement=document.getElementById("visit-here");
    visitHere=visitHereElement.options[visitHereElement.selectedIndex].text;

    console.log(name," ",email," ",gender," ",age," ",foodType," ",rate," ",visitOutside," ",visitHere);
})

//cosnt formObj= new Form();