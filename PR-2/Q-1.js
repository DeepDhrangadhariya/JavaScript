let character = document.getElementById("i1").value;

  if (character === "") {
    document.getElementById("ans").innerText = "";
  } else {

    switch(character){

       case 'a' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'A' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'e' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'E' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'i' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'I' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'u' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'U' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'o' : document.getElementById("ans").innerText = "It's Vowel"
       break;
       case 'O' : document.getElementById("ans").innerText = "It's Vowel"
       break;


        default : document.getElementById("ans").innerText = "It's Consonant"

    }
    
  }