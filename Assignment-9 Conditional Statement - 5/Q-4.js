let l = document.getElementById("i1").value;

  if (l === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(l){

        case "english" : document.getElementById("ans").innerText = "Hello!"
        console.log("Hello!")
        break;
        case "English" : document.getElementById("ans").innerText = "Hello!"
        console.log("Hello!")
        break;
        case "ENGLISH" : document.getElementById("ans").innerText = "Hello!"
        console.log("Hello!")
        break;
        case "spanish" : document.getElementById("ans").innerText = "¡Hola!"
        console.log("¡Hola!")
        break;
        case "Spanish" : document.getElementById("ans").innerText = "¡Hola!"
        console.log("¡Hola!")
        break;
        case "SPANISH" : document.getElementById("ans").innerText = "¡Hola!"
        console.log("¡Hola!")
        break;
        case "french" || "Green" || "GREEN": document.getElementById("ans").innerText = "Bonjour!"
        console.log("Bonjour!")
        break;
        case "French": document.getElementById("ans").innerText = "Bonjour!"
        console.log("Bonjour!")
        break;
        case "FRENCH": document.getElementById("ans").innerText = "Bonjour!"
        console.log("Bonjour!")
        break;
        default : ""

    }
    
  }