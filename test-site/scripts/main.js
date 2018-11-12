var myHeading = document.querySelector('h2');
myHeading.textContent = 'Hello World';
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
    var myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool,' + myName;


}
if (!localStorage.getItem('name')) {
    setUserName();

} else {
    var storeedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool,' + storeedName;
}
myButton.onclick = function() {
    setUserName();
}