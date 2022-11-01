function aboutFunction() {
    var x = document.getElementById("boxes");
    var y = document.getElementById("video");
    if (x.style.display === "none" & y.style.display === "none") {
      x.style.display = "block";
    } 
    else if (x.style.display === "none" & y.style.display === "block") {
        y.style.display = "none";
        x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
  }

function vidFunction() {
    var x = document.getElementById("video");
    var y = document.getElementById("boxes");
    if (x.style.display === "none" & y.style.display === "none") {
      x.style.display = "block";
    } 
    else if (x.style.display === "none" & y.style.display === "block") {
        y.style.display = "none";
        x.style.display = "block";
    }
    else {
      x.style.display = "none";
    }
 }