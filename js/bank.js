document.getElementById('submit-button').addEventListener('click', function(){
    // get email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
// check email and password
    if (userEmail == 'sele@gmail.com' && userPassword == 'bap'){
        // go to another page
        window.location.href = 'banking.html';
    }
})
