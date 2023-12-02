let a = document.getElementById("i1").value;
let b = document.getElementById("i2").value;
let c = document.getElementById("i3").value;

let d = +a + +b + +c;
console.log(d);

  if (a === "" || b === "" || c === "") {
    document.getElementById("ans").innerText = "";
  } else {

   if(d == 180){
        if(a == b && b == c && c == a)
        {
            document.getElementById("ans").innerHTML = "It's Equilateral Triangle"
        }
        else if(a != b && b != c && c != a)
        {
            document.getElementById("ans").innerHTML = "It's Scalene Triangle"
        }
        else
        {
            document.getElementById("ans").innerHTML = "It's Isoceles Triangle"
        }
   }
    
  }