// Math problem validation
function validateMathAnswers() {
    const answer1 = document.getElementById('answer1').value.trim();
    const answer2 = document.getElementById('answer2').value.trim();
    const errorMessage = document.getElementById('error-message');
    const successMessage = document.getElementById('success-message');

    // Correct answers
    const correctAnswer1 = "x=1.41";
    const correctAnswer2 = "x=-11.41";

    // Check if the answers are correct, order doesn't matter
    if ((answer1 === correctAnswer1 && answer2 === correctAnswer2) || (answer1 === correctAnswer2 && answer2 === correctAnswer1)) {
        successMessage.style.display = 'block';  // Show success message
        errorMessage.style.display = 'none';  // Hide error message
        document.getElementById('math-form').style.display = 'none'; // Hide math form after correct answer
        flipCard(); // Automatically flip the card when the answer is correct
    } else {
        successMessage.style.display = 'none';  // Hide success message
        errorMessage.style.display = 'block';  // Show error message
    }
}

// Show math form after clicking "Tap to Open"
function revealMathProblem() {
    document.getElementById('math-form').style.display = 'block';
    document.querySelector('.card-container').style.display = 'none'; // Hide card until solved
}

// Countdown Timer
function updateCountdown() {
    const birthday = new Date("February 11, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = birthday - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        document.getElementById("timer").innerHTML = "🎉 Happy Birthday! 🎉";
    }
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Birthday Card Flip
function flipCard() {
    document.querySelector(".card").classList.toggle("flipped");
    document.querySelector(".card-container").style.display = 'block';  // Reveal card after flip

    // Show "Happy Birthday!" message after flip
    setTimeout(() => {
        const popup = document.createElement("div");
        popup.classList.add("popup");
        popup.innerText = "🎉 Happy Birthday! 🎉";
        document.body.appendChild(popup);
    }, 500);  // Delay the popup a bit to match the flip
}
