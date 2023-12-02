let a = document.getElementById("i1").value;
let b = document.getElementById("i2").value;
let c = document.getElementById("i3").value;
let d = document.getElementById("i4").value;
let e = document.getElementById("i5").value;

  if (a === "" || b === "" || c === ""|| d === "" || e === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(a > b){
        if(a > c){
            if(a > d){
                if(a > e){
                    document.getElementById("ans").innerText = +a
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
            else{
                document.getElementById("ans").innerText = +d
            }
        }
        else{
            if(c > d){
                if(c > e){
                    document.getElementById("ans").innerText = +c
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
            else{
                if(d > e){
                    document.getElementById("ans").innerText = +d
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
        }
        
    }
    else{
        if(b > c){
            if(b > d){
                if(b > e){
                    document.getElementById("ans").innerText = +b
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
            else{
                if(d > e){
                    document.getElementById("ans").innerText = +d
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
            
        }
        else{
            if(c > d){
                if(c > e){
                    document.getElementById("ans").innerText = +c
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
            else{
                if(d > e){
                    document.getElementById("ans").innerText = +d
                }
                else{
                    document.getElementById("ans").innerText = +e
                }
            }
            
        }
        
    }
    
  }