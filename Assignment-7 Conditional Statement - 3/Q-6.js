let t = document.getElementById("i1").value;

  if (t === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(t >= 5 && t < 12){
        document.getElementById("ans").innerHTML="Good Morning"
    }
    else if(t >= 12 && t < 18){
        document.getElementById("ans").innerHTML="Good Afternoon"
    }
    else {
        document.getElementById("ans").innerHTML="Good Evening"
    }
    
  }
