let n = document.getElementById("i1").value;

  if (n === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(n % 2 == 0){
        document.getElementById("ans").innerHTML="It's Even Number"
    }
    else {
        document.getElementById("ans").innerHTML="It's Odd Number"
    }
    
  }
