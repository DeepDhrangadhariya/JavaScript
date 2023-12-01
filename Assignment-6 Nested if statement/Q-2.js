let i = document.getElementById("i1").value;

  if (i === "") 
  {
    document.getElementById("ans").innerText = "";
  } 
  else 
  {
        if(i >= 0 && i <= 10000){

            document.getElementById("ans").innerText = "You Have To Pay 5% Tax"
    
        }
        else if(i >= 10001 && i <= 20000){
    
            document.getElementById("ans").innerText = "You Have To Pay 10% Tax"
    
        }
        else if(i >= 20001 && i <= 30000){
    
            document.getElementById("ans").innerText = "You Have To Pay 15% Tax"
    
        }
        else if(i >= 30001 && i <= 40000){
    
            document.getElementById("ans").innerText = "You Have To Pay 20% Tax"
    
        }
        else if(i > 40000){
    
            document.getElementById("ans").innerText = "You Have To Pay 25% Tax"
    
        }
        else if(i < 0){
    
            document.getElementById("ans").innerText = "Find Any Work To Get Money"
    
        }
        else{
    
            document.getElementById("ans").innerText = "Please Enter Valid Income"
    
        }
    }