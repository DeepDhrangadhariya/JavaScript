let age = document.getElementById("i1").value;

  if (age === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(age <= 0){

        document.getElementById("ans").innerText = "Please Born First"

    }
    else{

        if(age < 18){

            document.getElementById("ans").innerText = "Students Under 18 Pay $8"
    
        }
        else if(age >= 18 && age < 65){
    
            document.getElementById("ans").innerText = "Adults Pay $12"
    
        }
        else{
    
            document.getElementById("ans").innerText = "Senior Citizens Pay $6."
    
        }

    }
    
    

  }