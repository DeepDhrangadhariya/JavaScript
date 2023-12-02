let a = document.getElementById("i1").value;
let b = document.getElementById("i2").value;
let c = document.getElementById("i3").value;
let d = document.getElementById("i4").value;

  if (a == "" || b == "" || c == "" || d == "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(a < b){
        if(a < c){
            if(a < d){
                document.getElementById("ans").innerText = a
            }
            else{
                document.getElementById("ans").innerText = d
            }
        }
        else{
            document.getElementById("ans").innerText = c
        }
        
    }
    else{
        if(b < c){
            if(b < d){
                document.getElementById("ans").innerText = b
            }
            else{
                document.getElementById("ans").innerText = d
            }
        }
        else{
            if(c < d){
                document.getElementById("ans").innerText = c
            }
            else{
                document.getElementById("ans").innerText = d
            }
        }
        
    }
    
  }