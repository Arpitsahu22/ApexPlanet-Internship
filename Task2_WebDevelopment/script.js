// Activity 2: Contact Form Validation
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("formMessage");

    // Check empty fields
    if (name === "" || email === "" ||
        subject === "" || message === "") {

        formMessage.style.color = "red";
        formMessage.innerText = "Please fill in all required fields.";
        return;
    }

    // Validate email format
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        formMessage.style.color = "red";
        formMessage.innerText = "Please enter a valid email address.";
        return;
    }

    // Successful validation
    formMessage.style.color = "green";
    formMessage.innerText = "Form submitted successfully!";

    contactForm.reset();

});


// Activity 4: Dynamic To-Do List

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Function to add a task
function addTask() {

    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    let li = document.createElement("li");

    // Create task text
    let span = document.createElement("span");
    span.innerText = task;

    // Create delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.type = "button";

    // Remove task when clicked
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Add elements to list
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Button click event
addTaskBtn.addEventListener("click", addTask);

// Allow Enter key to add task
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
