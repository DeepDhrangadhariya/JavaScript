let a = document.getElementById("i1").value;

  if (a === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(a <= 0){

        document.getElementById("ans").innerText = "Please Born First"

    }
    else{

        if(a < 18){

            document.getElementById("ans").innerText = "You Are Minor"
    
        }
        else if(a >= 18 && a < 65){
    
            document.getElementById("ans").innerText = "You Are Adult"
    
        }
        else{
    
            document.getElementById("ans").innerText = "Your Are Senior Citizen"
    
        }

    }
    
    

  }