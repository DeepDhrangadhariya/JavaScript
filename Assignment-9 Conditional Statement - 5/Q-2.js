let a = parseInt(document.getElementById("i1").value);
let b = parseInt(document.getElementById("i2").value);
let c = document.getElementById("i3").value;
let d;

  if (a === "" || b === "" || c === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(c){

        case "+" : d = a + b
        // document.getElementById("ans").innerText = d
        break;
        case '-' : d = a - b
        break;
        case '*' : d = a * b
        break;
        case '/' : d = a / b
        break;
        default : "aa"

    }

    document.getElementById("ans").innerText = "Result " + d
    console.log(d)
    
  }