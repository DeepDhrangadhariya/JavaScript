let oe = document.getElementById("i1").value;

  if (oe === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(oe % 2 == 0){
        document.getElementById("ans").innerHTML="It's Even Number"
    }
    else {
        document.getElementById("ans").innerHTML="It's Odd Number"
    }
    
  }