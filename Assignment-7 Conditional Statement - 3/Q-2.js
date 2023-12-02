let w = document.getElementById("i1").value;
let h = document.getElementById("i2").value;

let bmi = w/(h*h);


  if (bmi === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(bmi <= 0){

        document.getElementById("ans").innerText = "Please Born First"

    }
    else{

        if(bmi < 18.5){

            document.getElementById("ans").innerText = "Underweight"
    
        }
        else if(bmi >= 18.5 && bmi <= 24.9){
    
            document.getElementById("ans").innerText = "Normal weight"
    
        }
        else if(bmi >= 25 && bmi <= 29.9){
    
            document.getElementById("ans").innerText = "Overweight"
    
        }
        else{
    
            document.getElementById("ans").innerText = "Obese"
    
        }

    }
    
    

  }