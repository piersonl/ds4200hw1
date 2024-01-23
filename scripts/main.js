const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lickilicky.png") {
    myImage.setAttribute("src", "images/lickilicky2.jpg");
  } else {
    myImage.setAttribute("src", "images/lickilicky.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = () => {
    setUserName();
  };

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Hello, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello, ${storedName}`;
  }

