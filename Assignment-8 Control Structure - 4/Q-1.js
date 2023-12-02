let u = document.getElementById("i1").value;

  if (u === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(u <= 100)
		{
			let b = u * 1
			document.getElementById("ans").innerHTML="$1 per Unit : " + b;
		}	
		else if(u > 101 && u <= 199)
		{
			let b = u * 2 - 100
			document.getElementById("ans").innerHTML="$2 per Unit : " + b;
		}
		else
		{
			let b = u * 3 - 300
			document.getElementById("ans").innerHTML="$3 Per Unit : " + b;
		}
    
  }
