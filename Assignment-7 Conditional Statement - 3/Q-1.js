let p = document.getElementById("i1").value;
let op = 'abc12345'


  if (p == "") {
    document.getElementById("ans").innerText = "";
  } 
  else 
  {
        if(op === p){
            alert("Logged in successfully!")
        }
        else{
            let up = prompt("Enter New Password")
            if(up.length >= 5){
                document.getElementById("ans").innerHTML = "Password Updated Successfully"
            }
            else{
                document.getElementById("ans").innerHTML = "Please Enter Atleast 5 Letters or Numbers"
                
            }

        }
    }