let d = document.getElementById("i1").value;

  if (d === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(d % 5 == 0 && d % 7 == 0){
        document.getElementById("ans").innerText = "Divisible By Both 5 And 7" 
    }
    else{
        document.getElementById("ans").innerText = "Not Divisible By Both 5 And 7"   
    }
    
  }