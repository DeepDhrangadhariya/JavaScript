let grade = document.getElementById("i1").value;

  if (grade === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(grade){

        case "a" : document.getElementById("ans").innerText = "Excellent! You got an A."
        console.log("Excellent! You got an A.")
        break;
        case "A" : document.getElementById("ans").innerText = "Excellent! You got an A."
        console.log("Excellent! You got an A.")
        break;
        case "b" : document.getElementById("ans").innerText = "Well done! You got a B."
        console.log("Well done! You got a B.")
        break;
        case "B" : document.getElementById("ans").innerText = "Well done! You got a B."
        console.log("Well done! You got a B.")
        break;
        case "c" : document.getElementById("ans").innerText = "Good job! You got a C."
        console.log("Good job! You got a C.")
        break;
        case "C" : document.getElementById("ans").innerText = "Good job! You got a C."
        console.log("Good job! You got a C.")
        break;
        case "d" || "Green" || "GREEN": document.getElementById("ans").innerText = "You got a D. Keep working hard!"
        console.log("You got a D. Keep working hard!")
        break;
        case "D": document.getElementById("ans").innerText = "You got a D. Keep working hard!"
        console.log("You got a D. Keep working hard!")
        break;
        case "f": document.getElementById("ans").innerText = "Unfortunately, you failed."
        console.log("Unfortunately, you failed.")
        break;
        case "F": document.getElementById("ans").innerText = "Unfortunately, you failed."
        console.log("Unfortunately, you failed.")
        break;
        default : ""

    }
    
  }