let a = document.getElementById("i1").value;

  if (a === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(a <= 0){

        document.getElementById("ans").innerText = "Please Born First"

    }
    else{

        if(a <= 12){

            document.getElementById("ans").innerText = "Price: $8"
    
        }
        else if(a >= 13 && a < 65){
    
            document.getElementById("ans").innerText = "Price: $15"
    
        }
        else{
    
            document.getElementById("ans").innerText = "Price: $10"
    
        }

    }
    
    

  }