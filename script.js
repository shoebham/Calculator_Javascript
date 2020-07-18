let screen = document.querySelector(".txt");
const buttonPressed = document.querySelectorAll(".key");
const clear =document.querySelector(".clear");
let previousNumber = 0;
let opeartor;
let numArray = [];
let nextNumber;
let result =0;
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function multi(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function operate(a,b,operator){
 switch(operator){
     case "+":
        add(a,b);
         break;
     case "-":
        sub(a,b);
         break;
     case "*":
        multi(a,b);
         break;
     case "/":
        div(a,b);
         break;
    default:
        console.log("Bad expression!!");
        break;

 }
}


function display(){
   
    buttonPressed.forEach((item)=>{
        // console.log(item);
        item.addEventListener("click",()=>{
            screen.textContent += item.textContent;
            
            if(screen.textContent.charAt(0)=="+"||screen.textContent.charAt(0)=="-"||screen.textContent.charAt(0)=="*"||screen.textContent.charAt(0)=="/"){
                console.log("matched");
                screen.textContent = screen.textContent.slice(1,screen.textContent.length);
            }
            console.log(item.textContent +" clicked");
            
        });
    });
    
}
function clearScren(){
    clear.addEventListener("click",()=>{
        screen.textContent="";
    })

}
function calculate(){
    const equal = document.querySelector(".equal");
    equal.addEventListener("click",()=>{
    let content =screen.textContent;
    numArray = content.split(/(?<=[-+*\/])|(?=[-+*\/])/);
    console.log(numArray);
    try{
    while(numArray.length!=1){
    switch(numArray[1]){
        case "+":
            result=add(parseFloat(numArray[0]),parseFloat(numArray[2]));
            numArray.splice(0,2);
            numArray[0]= result;
            screen.textContent=numArray.join("");
            console.log("inside switch");
            break;
        case "-":
            result=sub(parseFloat(numArray[0]),parseFloat(numArray[2]));
            numArray.splice(0,2);
            numArray[0]= result;
            screen.textContent=numArray.join("");
            console.log("inside switch");
            break;
        case "*":
            result=multi(parseFloat(numArray[0]),parseFloat(numArray[2]));
            numArray.splice(0,2);
            numArray[0]= result;
            screen.textContent=numArray.join("");
            console.log("inside switch");
            break;
        case "/":
            result=div(parseFloat(numArray[0]),parseFloat(numArray[2]));
            numArray.splice(0,2);
            numArray[0]= result;
            screen.textContent=numArray.join("");
            console.log("inside switch");
            break;
        default:
            console.log("hahaha");
            break;

    }
}

    console.log(numArray);
    }catch(err){alert("error!!!");}
    });
}

// document.querySelectorAll("button").forEach((item)=>{
// item.addEventListener("mouseover",()=>{
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     item.style.backgroundColor="#"+ randomColor;

// });
// });

calculate();    
clearScren();
display();