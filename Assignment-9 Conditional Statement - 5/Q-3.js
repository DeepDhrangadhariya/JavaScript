let lightColor = document.getElementById("i1").value;

  if (lightColor === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(lightColor){

        case "red" : document.getElementById("ans").innerText = "Stop!"
        console.log("Stop!")
        break;
        case "Red" : document.getElementById("ans").innerText = "Stop!"
        console.log("Stop!")
        break;
        case "RED" : document.getElementById("ans").innerText = "Stop!"
        console.log("Stop!")
        break;
        case "yellow" : document.getElementById("ans").innerText = "Slow down!"
        console.log("Slow down!")
        break;
        case "Yellow" : document.getElementById("ans").innerText = "Slow down!"
        console.log("Slow down!")
        break;
        case "YELLOW" : document.getElementById("ans").innerText = "Slow down!"
        console.log("Slow down!")
        break;
        case "green" || "Green" || "GREEN": document.getElementById("ans").innerText = "Go!"
        console.log("Go!")
        break;
        case "Green": document.getElementById("ans").innerText = "Go!"
        console.log("Go!")
        break;
        case "GREEN": document.getElementById("ans").innerText = "Go!"
        console.log("Go!")
        break;
        default : ""

    }
    
  }