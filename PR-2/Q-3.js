let a = document.getElementById("i1").value
let b = document.getElementById("i2").value


if (num === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if (a >= 3 && b >= 100) {
        document.getElementById("ans").innerText = "Congratulations! You are eligible for a special offer."
    } else {
        document.getElementById("ans").innerText = "Sorry! You are not eligible for the special offer."
    }
    
  }