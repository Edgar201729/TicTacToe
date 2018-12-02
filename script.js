window.onload = function () {
  for (var i = 0; i < 9; i++) {
      document.getElementById('container').innerHTML = 
      document.getElementById('container').innerHTML + '<div class="block"></div>';
   }

var step = 0;

document.getElementById("container").onclick = function (e) {
  console.log(event);

    if (event.target.className == "block") {
        if (step % 2 === 0) {
          event.target.innerHTML = "X";
        }else {
          event.target.innerHTML = "O";
        }
       step++;   
       winner ();
     }
   }
   function winner () {
     var allBlocks = document.getElementsByClassName("block");
     console.log(allBlocks);
       if (allBlocks[0].innerHTML === "X" && allBlocks[1].innerHTML === "X" &&
         allBlocks[2].innerHTML === "X") {
           alert("The winner is X");
       }

       if (allBlocks[3].innerHTML === "X" && allBlocks[4].innerHTML === "X" &&
         allBlocks[5].innerHTML === "X") {
           alert("The winner is X");
       } 
       
       if (allBlocks[6].innerHTML === "X" && allBlocks[7].innerHTML === "X" &&
         allBlocks[8].innerHTML === "X") {
           alert("The winner is X");
       }  
       
       if (allBlocks[0].innerHTML === "X" && allBlocks[3].innerHTML === "X" &&
         allBlocks[6].innerHTML === "X") {
           alert("The winner is X");
       }  
       
       if (allBlocks[1].innerHTML === "X" && allBlocks[4].innerHTML === "X" &&
        allBlocks[7].innerHTML === "X") {
           alert("The winner is X");
       } 
       
       if (allBlocks[2].innerHTML === "X" && allBlocks[5].innerHTML === "X" &&
         allBlocks[8].innerHTML === "X") {
           alert("The winner is X");
       }  
       //012
       //345
       //678
       if (allBlocks[0].innerHTML === "X" && allBlocks[4].innerHTML === "X" &&
         allBlocks[8].innerHTML === "X") {
            alert("The winner is X");
      }  
      
      if (allBlocks[2].innerHTML === "X" && allBlocks[4].innerHTML === "X" &&
         allBlocks[6].innerHTML === "X") {
            alert("The winner is X");
      } 
      
//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO      
      
    if (allBlocks[0].innerHTML === "O" && allBlocks[1].innerHTML === "O" &&
      allBlocks[2].innerHTML === "O") {
        alert("The winner is O");
    }

    if (allBlocks[3].innerHTML === "O" && allBlocks[4].innerHTML === "O" &&
      allBlocks[5].innerHTML === "O") {
        alert("The winner is O");
    } 
    
    if (allBlocks[6].innerHTML === "O" && allBlocks[7].innerHTML === "O" &&
      allBlocks[8].innerHTML === "O") {
        alert("The winner is O");
    }  
    
    if (allBlocks[0].innerHTML === "O" && allBlocks[3].innerHTML === "O" &&
      allBlocks[6].innerHTML === "O") {
        alert("The winner is O");
    }  
    
    if (allBlocks[1].innerHTML === "O" && allBlocks[4].innerHTML === "O" &&
     allBlocks[7].innerHTML === "O") {
        alert("The winner is O");
    } 
    
    if (allBlocks[2].innerHTML === "O" && allBlocks[5].innerHTML === "O" &&
      allBlocks[8].innerHTML === "O") {
        alert("The winner is O");
    }  
    //012
    //345
    //678
    if (allBlocks[0].innerHTML === "O" && allBlocks[4].innerHTML === "O" &&
      allBlocks[8].innerHTML === "O") {
         alert("The winner is O");
   }  
   
   if (allBlocks[2].innerHTML === "O" && allBlocks[4].innerHTML === "O" &&
      allBlocks[6].innerHTML === "O") {
         alert("The winner is O");
   }       
  }
}




