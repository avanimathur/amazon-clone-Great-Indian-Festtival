const right=document.querySelector(".right-btn");
right.addEventListener("click",function(event){
const conent=document.querySelector(".slide-carousel");
conent.scrollLeft+=1100;
event.preventDefault();
})
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownItems = document.querySelectorAll('.dropdown-content a');

dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLanguage = item.innerHTML;
        dropdownButton.innerHTML = selectedLanguage;
    });
});


const left=document.querySelector(".left-btn");
left.addEventListener("click",function(event){
const conent=document.querySelector(".slide-carousel");
conent.scrollLeft-=1100;
event.preventDefault();
})
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("locationModal");
    const locationSection = document.querySelector(".location");
    const closeModal = document.querySelector(".close");
    const signInButton = document.getElementById("signInButton");
    const submitPinCode = document.getElementById("submitPinCode");
    const pinCodeInput = document.getElementById("pinCodeInput");

    // Show modal when location section is clicked
    locationSection.addEventListener("click", function () {
        modal.style.display = "block";
    });

    // Close modal
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle sign-in button click
    signInButton.addEventListener("click", function () {
        window.location.href = "Loginpage.html";
    });

    // Handle pin code submission
    submitPinCode.addEventListener("click", function () {
        const pinCode = pinCodeInput.value;
        if (pinCode) {
            document.querySelector(".location-name").innerText = `Deliver to ${pinCode}`;
            modal.style.display = "none";
        } else {
            alert("Please enter a valid pin code.");
        }
    });
});


const toTopButton = document.querySelector('.backtotop');

toTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
