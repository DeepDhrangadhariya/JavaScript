let year = document.getElementById("i1").value;

  if (year === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        document.getElementById("ans").innerHTML = year + " is a leap year.";
    } else {
        document.getElementById("ans").innerHTML = year + " is not a leap year.";
    }
    
  }