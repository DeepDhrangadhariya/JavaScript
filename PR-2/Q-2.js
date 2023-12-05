let num = document.getElementById("i1").value;

  if (num === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(+num){

        case 1 : document.getElementById("ans").innerText = "It's Sunday"
        break;
        case 2 : document.getElementById("ans").innerText = "It's Monday"
        break;
        case 3 : document.getElementById("ans").innerText = "It's Tuesday"
        break;
        case 4 : document.getElementById("ans").innerText = "It's Wednesday"
        break;
        case 5 : document.getElementById("ans").innerText = "It's Thursday"
        break;
        case 6 : document.getElementById("ans").innerText = "It's Friday"
        break;
        case 7 : document.getElementById("ans").innerText = "It's Saturday"
        break;
        default : document.getElementById("ans").innerText = "Invalid input"

    }
    
  }