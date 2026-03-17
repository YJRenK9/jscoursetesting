
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

function submitFeedback() {
    // display popup message
    alert("Thank you for your valuable feedback!");

    // get the user data when the user submits the form (put it outside and it'll only get nothing once)
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    // display the user data when the user submits the form
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;

    // show user info after the user submits feedback
    document.getElementById('userInfo').style.display = "block";
}

// used to submit the form upon pressing Enter instead of just clicking the submit button
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter')  submitFeedback(); 
});