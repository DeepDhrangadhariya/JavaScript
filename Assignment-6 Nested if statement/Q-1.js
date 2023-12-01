let g = document.getElementById("i1").value;

  if (g === "") 
  {
    document.getElementById("ans").innerText = "";
  } 
  else 
  {
        if(g >= 90 && g <= 100){

            document.getElementById("ans").innerText = "Congratulations You Have 'A' Grade"
    
        }
        else if(g >= 80 && g <= 89){
    
            document.getElementById("ans").innerText = "Congratulations You Have 'B' Grade"
    
        }
        else if(g >= 70 && g <= 79){
    
            document.getElementById("ans").innerText = "Congratulations You Have 'C' Grade"
    
        }
        else if(g >= 60 && g <= 69){
    
            document.getElementById("ans").innerText = "Congratulations You Have 'D' Grade"
    
        }
        else if(g >= 0 && g <= 59){
    
            document.getElementById("ans").innerText = "You Have 'F' Grade Better Luck Next Time :("
    
        }
        else if(g < 0){
    
            document.getElementById("ans").innerText = "Check Your Marks First"
    
        }
        else{
    
            document.getElementById("ans").innerText = "Please Enter Valid Grade"
    
        }
    }