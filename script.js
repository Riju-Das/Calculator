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
                if(num1=="" || item.value!="." && !num1.toString().includes(".") && num1!=""){
                    document.getElementById("decimal").disabled = false;
                }
                if(item.value=="." && !num1.toString().includes(".")){
                    document.getElementById("decimal").disabled = true;
                }
                if(output.textContent=="ERROR"){
                    
                    output.textContent=""
                }
                num1 = num1+item.value
                console.log(num1)
                output.textContent = output.textContent +item.value
            }
            else if(num1 != "" && operate !=""){
                if(num2==""){
                    document.getElementById("decimal").disabled = false;
                }
                if(item.value=="." && !num2.toString().includes(".")){
                    document.getElementById("decimal").disabled = true;
                }
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
            if(result!="ERROR"){
                num1=result;
            }
            else{
                num1="";
            }
            
            num2="";
            operate=""
            
            
        }
        else if(event.target.id == "ac"){
            output.textContent=""
            num1=""
            operate=""
            num2=""


        }
        else if (event.target.id == "del" && output.textContent!="ERROR") {
            if(num2!=""){
                num2=num2.toString().slice(0,-1)
                if(!num2.toString().includes(".")){
                    document.getElementById("decimal").disabled = false;
                }
            }
            else if(operate!=""){
                operate=operate.toString().slice(0,-1)
            }
            else if(num1!=""){
                num1=num1.toString().slice(0,-1)
                if(!num1.toString().includes(".")){
                    document.getElementById("decimal").disabled = false;
                }
            }
            output.textContent= output.textContent.slice(0,-1)
        }
    })
})