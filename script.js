const btn = document.querySelectorAll("button")
const output = document.querySelector(".outputnum")
let num1="";
let num2="";
let operate="";

function calculation(num1,num2,operate){
    if(operate=="+"){
        return Number(num1)+Number(num2)
    }
    else if(operate=="-"){
        return Number(num1)-Number(num2)
    }
    else if(operate=="÷"){
        if(num2==0){
            return "ERROR"
        }
        return Number(num1)/Number(num2)
    }
    else if(operate=="x"){
        return Number(num1)*Number(num2)
    }
    else if(operate=="%"){
        return Number(num1)%Number(num2)
    }
}

btn.forEach(item=>{
    item.addEventListener("click",(event)=>{
        if(event.target.className == "numbers"){
            if(num2=="" && operate == ""){
                num1 = num1+item.value
                console.log(num1)
                output.textContent = output.textContent +item.value
            }
            else if(num1 != "" && operate !=""){
                num2= num2+item.value
                output.textContent=output.textContent+item.value
                console.log(num2)
            }
        }
        else if(event.target.className == "operator" && event.target.id!="equalto"){
            if(num1!="" && num2=="" && event.target.id){
                if(operate!=""){
                    output.textContent = output.textContent.slice(0, -1);
                }
                operate = item.value
                output.textContent=output.textContent+item.value
                console.log(operate)
            }
            
        }
        else if(num1 != "" && operate !="" && num2!="" && event.target.id=="equalto"){
            let result = calculation(num1,num2,operate)
            if(result >= 1e15){
                result.toExponential()
                result.toFixed(100)
            }
            output.textContent=result
            num1=result;
            num2="";
            operate=""
            console.log(typeof(result))
            console.log(result)

            
        }
        else if(event.target.id == "ac"){
            output.textContent=""
            num1=""
            operate=""
            num2=""


        }
        else if (event.target.id == "del") {
            if(num2!=""){
                num2=num2.slice(0,-1)
            }
            else if(operate!=""){
                operate=operate.slice(0,-1)
            }
            else if(num1!=""){
                num1=num1.slice(0,-1)
            }
            output.textContent= output.textContent.slice(0,-1)
        }
    })
})
