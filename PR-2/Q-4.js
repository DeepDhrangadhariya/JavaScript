let amout = document.getElementById("i1").value;

  if (amout === "") {
    document.getElementById("ans").innerText = "";
  } else {

    let inr = 83.38
    
    amout *= inr

    document.getElementById("ans").innerText = "Amount in INR: " + amout
    
  }