const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body"); //to change the background color of the body
buttons.forEach((btn) => {
  //console.log(btn);
  btn.addEventListener("click", (e) => {
    //console.log(e);
    //console.log(e.target);
    switch (e.target.id) {
      case "blue":
        body.style.backgroundColor = "lightskyblue";
        break;
      case "pink":
        body.style.backgroundColor = "lightpink";
        break;

      case "green":
        body.style.backgroundColor = "green";
        break;
      case "grey":
        body.style.backgroundColor = "grey";
        break;
      default:
        // Optionally handle cases where the id does not match
        console.log("Unknown color");
        break;
    }
  });
});
