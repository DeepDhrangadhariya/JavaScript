let y = document.getElementById("i1").value;

  if (y === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
        document.getElementById("ans").innerHTML = y + " is a leap year.";
    } else {
        document.getElementById("ans").innerHTML = y + " is not a leap year.";
    }
    
  }