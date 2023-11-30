let n = document.getElementById("i1").value;

  if (n === "") {
    document.getElementById("ans").innerText = "";
  } else {

    if(n < 0)
    {

        document.getElementById("ans").innerText = "Negative Number"

    }
    else if(n == 0)
    {

        document.getElementById("ans").innerText = "Zero"

    }
    else if(n > 0)
    {

        document.getElementById("ans").innerText = "Positive Number"

    }
    else{

        document.getElementById("Please Enter A Number")

    }
    
    

  }