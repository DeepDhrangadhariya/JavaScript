let a = document.getElementById("i1").value;
let b = document.getElementById("i2").value;
let c = document.getElementById("i3").value;

  if (a === "" || b === "" || c === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(a < b){
        if(a < c){
            document.getElementById("ans").innerText = +a
        }
        else{
            document.getElementById("ans").innerText = +c
        }
    }
    else{
        if(b < c){
            document.getElementById("ans").innerText = +b
        }
        else{
            document.getElementById("ans").innerText = +c
        }
    }
    
  }