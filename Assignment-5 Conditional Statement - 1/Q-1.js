let f = document.getElementById("i1").value;

  if (f === "") {
    document.getElementById("ans").innerText = "Enter Fahrenheit";
  } else {
    if (f >= 80) {
    document.getElementById("ans").innerText = "Temperature Is Above 80 It's Hot!🔥";
  }
  else {

    document.getElementById("ans").innerText = "Temperature Is Below 80 It's Normal";

  }
  }