let n = document.getElementById("i1").value;

  if (n === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(+n){

        case 1 : document.getElementById("ans").innerText = "It's Monday, start of the workweek"
        break;
        case 2 : document.getElementById("ans").innerText = "It's Tuesday"
        break;
        case 3 : document.getElementById("ans").innerText = "It's Wednesday"
        break;
        case 4 : document.getElementById("ans").innerText = "It's Thursday"
        break;
        case 5 : document.getElementById("ans").innerText = "It's Friday, almost the weekend!"
        break;
        case 6 : document.getElementById("ans").innerText = "It's Saturday, Weekend"
        break;
        case 7 : document.getElementById("ans").innerText = "It's Sunday, Weekend"
        break;
        default : ""

    }
    
  }