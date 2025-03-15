const buttons = Array.from(document.getElementsByClassName("clickbleIMG"));

const paragraphs = Array.from(document.querySelectorAll("p"));



function changer(paragraph, Button) {



    let alreadyPressed = Button.getAttribute("aria-pressed");


    
    paragraphs.forEach(element => {

        element.classList.remove("active");
    });

    buttons.forEach(element => { 

        element.src = "./assets/images/icon-plus.svg";

        element.setAttribute("aria-pressed", "false");

        element.setAttribute("aria-expanded", "false");
    });



    if (alreadyPressed == "false") {

      paragraph.classList.add("active");

      Button.src = "./assets/images/icon-minus.svg";

      Button.setAttribute("aria-pressed", "true");

      Button.setAttribute("aria-expanded", "true");
   }
}



buttons.forEach((Button, position) => {

    Button.addEventListener("click", () => {

          changer(paragraphs[position], Button);
    });

    Button.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            
            changer(paragraphs[position], Button);
        }
    });
});