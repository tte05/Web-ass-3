const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
 function addTask(){
    // Check if the input box is empty.
    if(inputBox.value ===''){
        alert("Write something");
    }else{
        // Create a new `li` element.
        let li=document.createElement("li");
          // Set the inner HTML of the `li` element to the value of the input box.
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        // Create a new `span` element
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
     // Clear the input box.
    inputBox.value="";
     // Save the task list to local storage.
    saveData();

 }

// This event listener listens for click events on the list container.
 listContainer.addEventListener("click",function(e){
     // If the target of the click event is a `li` element, toggle the `checked` class of the `li` element.
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
          // If the target of the click event is a `span` element, remove the `li` element that the `span` element is a child of.
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
 },false);

 function saveData(){
        // Set the `data` item in local storage to the inner HTML of the list container.
    localStorage.setItem("data",listContainer.innerHTML);
 }

 function showTask(){
        // Set the inner HTML of the list container to the value of the `data` item in local storage.
    listContainer.innerHTML= localStorage.getItem("data");
 }
 showTask();


var countDownDate=new Date("Oct 30, 2023 00:00:00").getTime();
var x=setInterval(function(){
var now=new Date().getTime();
var distance=countDownDate-now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("Days").innerHTML=days;
document.getElementById("Hours").innerHTML=hours;
document.getElementById("Minutes").innerHTML=minutes;
document.getElementById("Seconds").innerHTML=seconds;
 },1000);


 // This function changes the content of the element with the ID `content`.
function changeContent() {
  // Get the input element with the ID `myInput`.
  const inputElement = document.getElementById('myInput');

  // Get the new content from the input element.
  const newText = inputElement.value;

  if (!validateContent(newText)) {
    return;
  }
  document.getElementById('content').innerHTML = `<p>${newText}</p>`;
}

function validateContent(content) {
  if (content === '') {
    return false;
  }
  return true;
}


// Get the element with the class 'score'
const score = document.querySelector('.score');

// Get all input elements with the class 'rating'
const ratings = document.querySelectorAll('.rating input');

// Add an event listener to each rating input
ratings.forEach(rating => {
  rating.addEventListener('change', () => {
    // Get the value of the selected rating
    const selectedRating = rating.value;

    // Determine whether to display 'star' or 'stars' based on the selected rating
    const text = selectedRating === '1' ? 'star' : 'stars';

    // Update the content of the element with the class 'score'
    score.textContent = `${selectedRating} ${text}`;
  });
});
