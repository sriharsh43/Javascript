document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is loaded and ready!");
    
    const projectLinks = document.querySelectorAll(".project-link");
  
    projectLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        console.log(`Hovering over: ${link.textContent}`);
      });
      link.addEventListener("click", (event) => {
        console.log(`Navigating to: ${link.href}`);
      });
    });
  });
  