let count = 0; // Initialize count to 0
let count2 = 10;

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // display the count
    checkCountValue(); // check count value and display messages
}

function displayCount() {
    // display the followers count on the webpage
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    // Allows the congrats message to repeat at milestones (10, 20, 50, etc.)
    if (count === count2 * 10) {
        count2 *= 10;
    } 

    // display a congrats message if user reached a certain amount of followers
    if (count === count2) {
        alert("Your IBMgram account gained "+count2+" followers! Congratulations!");
    } else if (count === count2 * 2) {
        alert("Your IBMgram account gained "+count2 * 2+" followers! Keep it up!");
    } else if (count === count2 * 5) {
        alert("Your IBMgram account gained "+count2 * 5+" followers! Cheers on obtaining such milestone!");
    } 
}

function resetCount() {
    count = 0; // reset to 0
    displayCount(); // display the result
    alert("Your followers count has been reset.");
}