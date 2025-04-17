let yourName = prompt ("Welcome! Please tell us your name!");

// Jika input kosong atau hanya spasi, set jadi "People" atau nama default
if (yourName === null || yourName.trim() === "") {
    yourName = "People";
  }

// Setelah mendapatkan nama yang valid
const welcomeEl = document.getElementById("welcome-message");
if (welcomeEl) {
  welcomeEl.innerText = `Hi ${yourName}! Welcome to Get Active!`;
}

//Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    
    if (name == '') {
        /// Disini logika ketika gagal
        alert('Please enter your name');
    } else {
        /// Disini logika ketika sukses
        alert('Form submitted successfully');
    }
}

// Submit Form
document
  .getElementById("message-us-form")
  .addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const message = document.getElementById("message").value;
  const timeNow = new Date().toString();

  document.getElementById("result-name").innerText = name;
  document.getElementById("result-dob").innerText = dob;
  document.getElementById("result-gender").innerText = gender;
  document.getElementById("result-message").innerText = message;
  document.getElementById("current-time").innerText = timeNow;
}

let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName('banner-img');
    
    // Check if indexBanner is greater than the length of the bannerList
    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    //Hide banner with looping
    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = 'display: none';
    }

    //Show the banner
    bannerList[indexBanner].style = 'display: block';
}

showBanner();

// Set interval to change the banner every 3 seconds
setInterval(() => {
    nextBanner();
}, 3000);
// Function to toggle the menu