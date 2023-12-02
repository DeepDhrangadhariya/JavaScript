let n = document.getElementById("i1").value;

  if (n === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(n % 5 == 0 && n % 7 == 0){
        document.getElementById("ans").innerText = "Divisible By Both 5 And 7" 
    }
    else{
        document.getElementById("ans").innerText = "Not Divisible By Both 5 And 7"   
    }
    
  }