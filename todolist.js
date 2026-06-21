// To-Do list logic
var list = document.getElementById("todolist");

function liAdd() {
    var inputText = document.getElementById("myTextArea").value;
    var deadlineText =  document.getElementById("Deadline").value;
    var optionMenu = document.querySelector(".select-menu");
    var sBtn_text = optionMenu.querySelector(".sBtn-text").innerText;
    var confettiStart = document.getElementById("confettiContainer").innerText;
    if (inputText.trim() !== "") {

        // this is the box.
        var todoBox = document.createElement("div");

        // this is the checkbox and the text.
        var checkbox = document.createElement("input");
        var checktext = document.createElement("label");

        // this is the deadline.
        var datetext = document.createElement("small");

        // this is the tooltip.(like the text that pops up from the title)
        var tooltipbox = document.createElement("div")
        var tooltiptext = document.createElement("p")
        
        /*-- ids & stuff --"linear-gradient(to right, white, red);"*/

        todoBox.id = "todoBox"
        if (sBtn_text == "Red") {
            todoBox.style.backgroundImage = 'linear-gradient(to right, white,white, red)';
        } else if (sBtn_text == "Orange") {
            todoBox.style.backgroundImage = 'linear-gradient(to right, white,white, orange)';
        } else if (sBtn_text == "Yellow") {
            todoBox.style.backgroundImage = 'linear-gradient(to right, white,white, yellow)';
        } else if (sBtn_text == "Green") {
            todoBox.style.backgroundImage = 'linear-gradient(to right, white,white, green)';
        } else if (sBtn_text == "Blue") {
            todoBox.style.backgroundImage = 'linear-gradient(to right, white,white, blue)';
        } else if (sBtn_text == "Purple") {
            todoBox.style.backgroundImage = 'linear-gradient(to right, white,white, violet)';
        }

        checkbox.type = "checkbox";
        checkbox.id = "checkbox";
        checkbox.classList.add("task-checkbox"); // optional class

        checktext.id = "checktext";
        checktext.textContent = inputText;

        datetext.id = "datetext";

        tooltipbox.id = "tooltipbox"
        tooltiptext.id = "tooltiptext"
        tooltiptext.textContent = inputText;
        tooltiptext.style.display = 'none';
        

        /*-- codin' --*/

        // // deadline variables
        // const dt = new Date(deadlineText);
        // const month = dt.getMonth() + 1; // Months are 0-indexed
        // const day = dt.getDate();
        // const hours = dt.getHours().toString().padStart(2, '0');
        // const minutes = dt.getMinutes().toString().padStart(2, '0');
        // datetext.textContent = `Deadline: ${month}/${day} ${hours}:${minutes}`;

        // Add event listener to new checkbox
        checkbox.addEventListener("change", function (e) {
            if (e.target.checked) {
                // popup.classList.remove("hidden");
                confetti({particleCount:100,spread:70,origin})
                checktext.style.textDecoration = "line-through";
            }
        });

        // tooltip code
        checktext.addEventListener('mouseover', () => {
            if (inputText.length > 19) {
                tooltiptext.style.display = 'block';
            } else {
              tooltiptext.style.display = 'none';  
            }
        }, false);

        // change display to 'none' on mouseleave
        checktext.addEventListener('mouseleave', () => {
            tooltiptext.style.display = 'none';
        }, false);

        /*-- appending -- */

        // append the whole todobox
        list.appendChild(todoBox);

        // append children to it
        todoBox.appendChild(tooltipbox);
        // todoBox.appendChild(document.createElement("br")); // newline
        
        // if the deadlineText isn't empty, append it
        if (deadlineText !== "") {
            const dt = new Date(deadlineText);
            const month = dt.getMonth() + 1;
            const day = dt.getDate();
            const hours = dt.getHours().toString().padStart(2, '0');
            const minutes = dt.getMinutes().toString().padStart(2, '0');
            datetext.textContent = `${month}/${day} ${hours}:${minutes}`;
            todoBox.appendChild(datetext);
        }
    

        tooltipbox.appendChild(tooltiptext);
        tooltipbox.appendChild(checkbox);
        tooltipbox.appendChild(checktext);

        document.getElementById("myTextArea").value = ""; // clear textarea
    }
}

// Popup logic
// const popup = document.getElementById("popup");
// const closeBtn = document.getElementById("closePopup");

// closeBtn.addEventListener("click", () => {
//     popup.classList.add("hidden");
// });

// window.addEventListener("click", (e) => {
//     if (e.target === popup) {
//         popup.classList.add("hidden");
//     }
// });

const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        optionMenu.classList.remove("active");
    });
});


var calendarText = document.getElementById("calendar-text");
var calendarBtn = document.getElementById("Deadline");
calendarBtn.addEventListener("change", ()=>{
    calendarText.innerText = calendarBtn.value
});


// document.getElementById("calendarIcon").addEventListener("click", function () {
// document.getElementById("Deadline").click();
// });

// window.getElementById('confettiButton').addEventListener('click', () => {
//     confetti({
//         particleCount: 100,
//         spread: 70,
//         origin: { y: 0.6 }
//     });
// });