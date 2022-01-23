let screen =document.getElementById("screen");

let buttons=document.querySelectorAll("button");
let screenValue='';
for(let button of buttons){
    button.addEventListener("click",(e)=>{
        let buttontext=e.target.innerText;
        console.log(buttontext);
        if(buttontext=="X"){
            buttontext="*";
            screenValue+=buttontext;
            screen.value=screenValue;
        }
        else if(buttontext=="="){
           screen.value=eval(screenValue);
        }
        else if(buttontext=="C"){
            screenValue="";
            screen.value=screenValue;
        }
        else{
            screenValue+=buttontext;
            screen.value=screenValue;
        }
    })
}